import { render, screen, fireEvent, waitFor } from '@/test/utils';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '../contact-form';

describe('ContactForm', () => {
  const user = userEvent.setup();

  it('renders all form fields correctly', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/budget/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/timeline/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('shows validation errors for required fields', async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
      expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
    });
  });

  it('validates email format correctly', async () => {
    render(<ContactForm />);

    const emailField = screen.getByLabelText(/email/i);
    await user.type(emailField, 'invalid-email');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(<ContactForm />);

    // Fill out the form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message that is long enough');

    // Select required dropdowns
    await user.selectOptions(screen.getByLabelText(/subject/i), 'general');
    await user.selectOptions(screen.getByLabelText(/budget/i), '5k-15k');
    await user.selectOptions(screen.getByLabelText(/timeline/i), '1-month');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Check for loading state
    await waitFor(() => {
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
    });
  });

  it('displays success message after successful submission', async () => {
    render(<ContactForm />);

    // Fill out the form with valid data
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message that is long enough');
    await user.selectOptions(screen.getByLabelText(/subject/i), 'general');
    await user.selectOptions(screen.getByLabelText(/budget/i), '5k-15k');
    await user.selectOptions(screen.getByLabelText(/timeline/i), '1-month');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('handles newsletter subscription checkbox', async () => {
    render(<ContactForm />);

    const newsletterCheckbox = screen.getByLabelText(/subscribe to our newsletter/i);
    expect(newsletterCheckbox).not.toBeChecked();

    await user.click(newsletterCheckbox);
    expect(newsletterCheckbox).toBeChecked();
  });
});