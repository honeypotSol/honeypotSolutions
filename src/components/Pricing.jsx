import React from 'react';
import styled from 'styled-components';

const PricingSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  perspective: 1000px;
`;

const PricingCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 400px;
  perspective: 1000px;
`;

const PricingCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${PricingCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const PricingCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const PricingCardFront = styled(PricingCardFace)`
  background-color: white;
`;

const PricingCardBack = styled(PricingCardFace)`
  background-color: var(--primary-color);
  color: white;
  transform: rotateY(180deg);
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PlanIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const PlanPrice = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
`;

const PlanFeature = styled.li`
  margin-bottom: 0.5rem;
`;

const OldPrice = styled.p`
  font-size: 1.5rem;
  text-decoration: line-through;
  color: #ffcccc;
  margin-bottom: 0.5rem;
`;

const plans = [
  {
    name: 'Basic',
    icon: '🚀',
    price: '$500',
    oldPrice: '$600',
    features: [
      'Wordpress Development',
      '5 Pages',
      'Responsive Design',
      '1 Month Support',
    ],
  },
  {
    name: 'Pro',
    icon: '👨‍💻',
    price: '$50/h',
    oldPrice: '$60/h',
    features: [
      'Web or Mobile App',
      'Unlimited Pages',
      'Responsive Design',
      'Custom Features',
      'Dedicated Engineer',
    ],
  },
  {
    name: 'Subscription',
    icon: '💳',
    price: '$5000/mo',
    oldPrice: '$6000/mo',
    features: [
      'Full-Stack Solutions',
      '1 active sprint per week',
      'Weekly summary report',
      'Dedicated Team',
      'Pause or cancel anytime',
    ],
  },
];

const Pricing = () => {
  return (
    <PricingSection id='pricing'>
      <div className='container'>
        <SectionTitle>Our Pricing</SectionTitle>
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard key={index}>
              <PricingCardInner>
                <PricingCardFront>
                  <PlanIcon>{plan.icon}</PlanIcon>
                  <PlanName>{plan.name}</PlanName>
                  <p>Flip to see pricing</p>
                </PricingCardFront>
                <PricingCardBack>
                  <OldPrice>{plan.oldPrice}</OldPrice>
                  <PlanPrice>{plan.price}</PlanPrice>
                  <PlanFeatures>
                    {plan.features.map((feature, i) => (
                      <PlanFeature key={i}>{feature}</PlanFeature>
                    ))}
                  </PlanFeatures>
                </PricingCardBack>
              </PricingCardInner>
            </PricingCard>
          ))}
        </PricingGrid>
      </div>
    </PricingSection>
  );
};

export default Pricing;
