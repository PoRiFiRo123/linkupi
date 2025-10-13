import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Copy, Share2, RefreshCw, QrCode, Wallet } from "lucide-react";

export const UPIGenerator = () => {
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [isAmountOptional, setIsAmountOptional] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [showQR, setShowQR] = useState(false);

  const validateUPI = (value: string) => {
    return value.includes("@");
  };

  const validateAmount = (value: string) => {
    if (isAmountOptional && !value) return true;
    const num = parseFloat(value);
    return !isNaN(num) && num > 0;
  };

  const generateLink = () => {
    if (!validateUPI(upiId)) {
      toast({
        title: "Invalid UPI ID",
        description: "Please enter a valid UPI ID (must contain @)",
        variant: "destructive",
      });
      return;
    }

    if (!isAmountOptional && !validateAmount(amount)) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount greater than 0",
        variant: "destructive",
      });
      return;
    }

    let link = `upi://pay?pa=${encodeURIComponent(upiId)}`;
    
    if (amount && !isAmountOptional) {
      link += `&am=${encodeURIComponent(amount)}`;
    }
    
    link += `&cu=INR`;
    
    if (note.trim()) {
      link += `&tn=${encodeURIComponent(note.trim())}`;
    }

    setGeneratedLink(link);
    setShowQR(true);
    
    toast({
      title: "Link Generated!",
      description: "Your UPI payment link is ready",
    });
  };

  const copyToClipboard = async () => {
    if (!generatedLink) return;

    try {
      await navigator.clipboard.writeText(generatedLink);
      toast({
        title: "Copied!",
        description: "Link copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const shareLink = async () => {
    if (!generatedLink) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "UPI Payment Link",
          text: `Pay via UPI: ${generatedLink}`,
          url: generatedLink,
        });
        toast({
          title: "Shared!",
          description: "Link shared successfully",
        });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          toast({
            title: "Share failed",
            description: "Please try copying instead",
            variant: "destructive",
          });
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const resetForm = () => {
    setUpiId("");
    setAmount("");
    setNote("");
    setGeneratedLink("");
    setShowQR(false);
    setIsAmountOptional(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Card className="shadow-card border-border/50 backdrop-blur-sm bg-card/95">
        <CardHeader className="text-center space-y-2 pb-6">
          <div className="flex justify-center mb-2">
            <div className="p-3 rounded-2xl bg-gradient-primary">
              <Wallet className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            UPI Link Generator
          </CardTitle>
          <CardDescription className="text-base">
            Generate instant payment links • No gateways required
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="upi-id" className="text-sm font-medium">
                UPI ID
              </Label>
              <Input
                id="upi-id"
                type="text"
                placeholder="yourname@okaxis"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="amount" className="text-sm font-medium">
                  Amount (₹)
                </Label>
                <div className="flex items-center gap-2">
                  <Switch
                    id="optional-amount"
                    checked={isAmountOptional}
                    onCheckedChange={setIsAmountOptional}
                  />
                  <Label htmlFor="optional-amount" className="text-sm text-muted-foreground cursor-pointer">
                    Optional
                  </Label>
                </div>
              </div>
              <Input
                id="amount"
                type="number"
                placeholder={isAmountOptional ? "Leave empty for any amount" : "250.00"}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={isAmountOptional}
                className="h-12 text-base"
                step="0.01"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="note" className="text-sm font-medium">
                Payment Note (Optional)
              </Label>
              <Textarea
                id="note"
                placeholder="Add a note for this payment..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="resize-none"
                rows={3}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={generateLink}
              className="flex-1 h-12 text-base font-medium shadow-elegant hover:shadow-xl transition-all"
              size="lg"
            >
              Generate Link
            </Button>
            <Button
              onClick={resetForm}
              variant="outline"
              className="h-12 px-6"
              size="lg"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>

          {generatedLink && (
            <div className="space-y-4 pt-4 border-t animate-in fade-in slide-in-from-top-2 duration-500">
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <QrCode className="w-4 h-4" />
                  Generated Link
                </Label>
                <div className="p-4 bg-muted rounded-lg break-all text-sm font-mono">
                  {generatedLink}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={copyToClipboard}
                  variant="secondary"
                  className="flex-1 h-11"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
                <Button
                  onClick={shareLink}
                  variant="secondary"
                  className="flex-1 h-11"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              {showQR && (
                <div className="flex justify-center pt-4 animate-in zoom-in duration-500">
                  <div className="p-6 bg-white rounded-2xl shadow-card">
                    <QRCodeSVG value={generatedLink} size={200} level="H" />
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <p className="text-center text-sm text-muted-foreground">
        🔒 This tool runs locally in your browser. No data is stored or transmitted.
      </p>
    </div>
  );
};
