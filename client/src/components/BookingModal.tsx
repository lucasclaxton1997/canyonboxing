import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Phone, Calendar, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Invalid phone number"),
  zipcode: z.string().min(5, "Invalid Zipcode"),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
  sessionType: z.enum(["1on1", "group"]),
  duration: z.enum(["30", "60"]),
});

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM"
];

export function BookingModal({ 
  isOpen, 
  onClose, 
  initialType = "1on1" 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  initialType?: "1on1" | "group" 
}) {
  const { toast } = useToast();
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      zipcode: "",
      sessionType: initialType,
      duration: "60",
      time: "",
    },
  });

  const onSubmit = (data: z.infer<typeof bookingSchema>) => {
    setStep(2); 
  };

  const handlePayment = () => {
    setTimeout(() => {
      toast({
        title: "Booking Confirmed!",
        description: "Your $10 deposit has been processed. We'll contact you to confirm.",
      });
      setStep(1);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border border-white/10 text-white sm:max-w-[550px] p-0 overflow-y-auto max-h-[90vh]">
        <div className="bg-brand-red p-6 text-center">
          <h2 className="text-2xl font-heading font-bold uppercase italic text-white tracking-tighter">
            Secure Your Spot
          </h2>
          <p className="text-white/80 text-sm mt-1 uppercase tracking-widest font-bold">
            Personal Training on Route 66
          </p>
        </div>
        
        <div className="p-6">
          {step === 1 ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-gray-400">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Muhammad Ali" {...field} className="bg-zinc-800 border-white/10 text-white rounded-none focus:ring-brand-red h-10" data-testid="input-booking-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-gray-400">Phone Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                            <Input placeholder="(555) 000-0000" {...field} className="pl-10 bg-zinc-800 border-white/10 text-white rounded-none focus:ring-brand-red h-10" data-testid="input-booking-phone" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <FormField
                    control={form.control}
                    name="zipcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-gray-400">Zipcode</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                            <Input placeholder="86046" {...field} className="pl-10 bg-zinc-800 border-white/10 text-white rounded-none focus:ring-brand-red h-10" data-testid="input-booking-zip" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col mt-1">
                        <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-gray-400 mb-2">Training Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal bg-zinc-800 border-white/10 text-white rounded-none h-10 hover:bg-zinc-700",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <Calendar className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-zinc-900 border-white/10" align="start">
                            <CalendarComponent
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                              className="text-white"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-gray-400">Preferred Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-zinc-800 border-white/10 text-white rounded-none h-10">
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white">
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <FormField
                    control={form.control}
                    name="sessionType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-gray-400">Session Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="1on1" className="border-white/20 text-brand-red" />
                              </FormControl>
                              <FormLabel className="font-normal text-white text-sm">1-on-1</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="group" className="border-white/20 text-brand-red" />
                              </FormControl>
                              <FormLabel className="font-normal text-white text-sm">Group</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-gray-400">Duration</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="60" className="border-white/20 text-brand-red" />
                              </FormControl>
                              <FormLabel className="font-normal text-white text-sm">60 Minutes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="30" className="border-white/20 text-brand-red" />
                              </FormControl>
                              <FormLabel className="font-normal text-white text-sm">30 Minutes</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 rounded-none uppercase font-bold tracking-widest py-6 mt-4">
                  Proceed to Deposit ($10)
                </Button>
              </form>
            </Form>
          ) : (
            <div className="space-y-6">
              <div className="bg-zinc-800 p-4 border border-white/5 rounded-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Booking Deposit</span>
                  <span className="text-white font-bold">$10.00</span>
                </div>
                <div className="text-xs text-gray-500">
                  Required to secure your slot. Applied to final session fee.
                </div>
              </div>

              <div className="space-y-4">
                <Label className="uppercase text-xs font-bold tracking-wider text-gray-400">Card Details</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="0000 0000 0000 0000" 
                    className="pl-10 bg-zinc-800 border-white/10 text-white rounded-none font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM/YY" className="bg-zinc-800 border-white/10 text-white rounded-none text-center" />
                  <Input placeholder="CVC" className="bg-zinc-800 border-white/10 text-white rounded-none text-center" />
                </div>
              </div>

              <Button onClick={handlePayment} className="w-full bg-brand-orange hover:bg-orange-600 text-white rounded-none uppercase font-bold tracking-widest py-6">
                Pay $10.00 & Confirm
              </Button>
              <Button variant="ghost" onClick={() => setStep(1)} className="w-full text-gray-400 hover:text-white uppercase text-xs">
                Back to Details
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
