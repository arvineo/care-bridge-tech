const StatsSection = () => {
  return <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-white to-purple-50 rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  In India, <span className="font-bold text-gray-900">over 100 million seniors</span> live with daily safety concerns. 
                  The concern increases when <span className="font-bold text-gray-900">seniors are staying alone</span>, away from their children. 
                  <span className="font-bold text-gray-900"> Families worry constantly.</span> The current system 
                  <span className="font-bold text-gray-900"> fails when it matters most.</span>
                </p>
                
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                
                <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
                  That's where <span className="font-bold text-gray-900">CareSanctum</span> steps in and solves this through 
                  <span className="font-bold text-gray-900"> technology, love, and care.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StatsSection;