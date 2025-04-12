import { useState } from 'react';
import '../assets/scss/pricing.scss';

const Pricing = () => {
  const [annually, setAnnually] = useState(false);

  const pricingData = [
    {
      tier: "TIER 1/Basic",
      price: annually ? 199000 : 19000,
      period: annually ? "/tahun" : "/bulan",
      features: [
        "Mencatat barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuntungan"
      ]
    },
    {
      tier: "TIER 2/Business",
      price: annually ? 499000 : 49000,
      period: annually ? "/tahun" : "/bulan",
      popular: true,
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam"
      ]
    },
    {
      tier: "TIER 3/Entrepreneur",
      price: annually ? 999000 : 99000,
      period: annually ? "/tahun" : "/bulan",
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
        "Export data ke Excel",
        "AI Prediksi penghasilan"
      ]
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Pilih Plan Yang Sesuai</h2>
        <div className="pricing-toggle">
          <span className={!annually ? 'active' : ''}>Bulanan</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={annually} 
              onChange={() => setAnnually(!annually)}
            />
            <span className="slider"></span>
          </label>
          <span className={annually ? 'active' : ''}>Tahunan</span>
        </div>
      </div>

      <div className="pricing-cards">
        {pricingData.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
          >
            {plan.popular && <div className="popular-badge">Popular</div>}
            <h3>{plan.tier}</h3>
            <div className="price">
              <span className="currency">Rp</span>
              <span className="amount">{plan.price.toLocaleString()}</span>
              <span className="period">{plan.period}</span>
            </div>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
            <button className="select-plan">
              Pilih Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;