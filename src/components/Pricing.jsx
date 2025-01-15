import React from 'react';
import styled from 'styled-components';

const PricingSection = styled.section`
  background-color: #f8f8f8;
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
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

const GetStartedButton = styled.a`
  background-color: white;
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
    color: white;
  }
`;

const plans = [
  {
    name: 'Basic',
    icon: '🚀',
    price: '$999',
    features: [
      'Web Development',
      '5 Pages',
      'Responsive Design',
      '1 Month Support',
    ],
  },
  {
    name: 'Pro',
    icon: '💼',
    price: '$2,499',
    features: [
      'Web & Mobile App',
      'Unlimited Pages',
      'Responsive Design',
      'Custom Features',
      '3 Months Support',
    ],
  },
  {
    name: 'Enterprise',
    icon: '🏢',
    price: 'Custom',
    features: [
      'Full-Stack Solutions',
      'AI & ML Integration',
      'Cloud Infrastructure',
      'Dedicated Team',
      '12 Months Support',
    ],
  },
];

const Pricing = () => {
  return (
    <PricingSection>
      <div className='container'>
        <SectionTitle>Our Pricing</SectionTitle>
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard key={index}>
              <PricingCardInner>
                <PricingCardFront>
                  <PlanIcon>{plan.icon}</PlanIcon>
                  <PlanName>{plan.name}</PlanName>
                  <p>Hover to see pricing</p>
                </PricingCardFront>
                <PricingCardBack>
                  <PlanPrice>{plan.price}</PlanPrice>
                  <PlanFeatures>
                    {plan.features.map((feature, i) => (
                      <PlanFeature key={i}>{feature}</PlanFeature>
                    ))}
                  </PlanFeatures>
                  <GetStartedButton href='#contact'>
                    Get Started
                  </GetStartedButton>
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
