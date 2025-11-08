import deviceLayers from "@/assets/device-layers.png";

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How AquaSense Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A clamp-on flow sensor that's easy to install and requires no pipe cutting
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={deviceLayers} 
              alt="AquaSense device components exploded view showing outer enclosure, mounting layer, gasket, sensor module, analog front end, motherboard, power subsystem, and communications antenna" 
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold mb-2">1. Install the Sensor</h3>
              <p className="text-muted-foreground">
                Simply clamp the device onto your pipes - no plumbing required. The mounting layer 
                securely attaches to any pipe size.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-4">
              <h3 className="text-xl font-semibold mb-2">2. Ultrasonic Monitoring</h3>
              <p className="text-muted-foreground">
                The sensor module uses ultrasonic transducers to measure water flow with ±2-5% accuracy, 
                detecting everything from drips to full flow.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <h3 className="text-xl font-semibold mb-2">3. Real-Time Analysis</h3>
              <p className="text-muted-foreground">
                The motherboard processes data locally using edge AI to detect patterns, classify usage 
                (shower vs tap vs leak), and send insights to your dashboard.
              </p>
            </div>

            <div className="border-l-4 border-success pl-4">
              <h3 className="text-xl font-semibold mb-2">4. Wireless Connectivity</h3>
              <p className="text-muted-foreground">
                Wi-Fi and BLE connectivity transmits data to the cloud for visualization, alerts, 
                and AI-powered recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
