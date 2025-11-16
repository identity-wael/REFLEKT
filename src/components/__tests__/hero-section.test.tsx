import { render, screen } from '@/test/utils';
import { HeroSection } from '../hero-section';

describe('HeroSection', () => {
  it('renders hero content correctly', () => {
    render(<HeroSection />);

    // Check for main heading
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Welcome to/)).toBeInTheDocument();
    expect(screen.getByText(/REFLEKT/)).toBeInTheDocument();

    // Check for subtitle
    expect(screen.getByText(/Innovative solutions for modern challenges/)).toBeInTheDocument();

    // Check for CTA button
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument();
  });

  it('displays statistics correctly', () => {
    render(<HeroSection />);

    // Check for stats
    expect(screen.getByText('150+')).toBeInTheDocument();
    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<HeroSection />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    const ctaButton = screen.getByRole('button', { name: /Learn More/i });
    expect(ctaButton).toBeInTheDocument();
  });
});