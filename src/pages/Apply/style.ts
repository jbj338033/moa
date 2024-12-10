import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont,
    system-ui, Roboto, sans-serif;
`;

export const Header = styled.header`
  padding: 7rem 2rem 3rem;
  background: #fafafa;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 2.5rem;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  color: #4b5563;
  max-width: 600px;
  line-height: 1.7;
`;

export const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const Form = styled.form`
  max-width: 720px;
  margin: 0 auto;
`;

export const FormSection = styled.div`
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.938rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const Required = styled.span`
  color: #ef4444;
  margin-left: 0.25rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.938rem;
  color: #111827;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #111827;
    box-shadow: 0 0 0 1px #111827;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.938rem;
  color: #111827;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #111827;
    box-shadow: 0 0 0 1px #111827;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.938rem;
  color: #374151;
`;

export const Radio = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.938rem;
  color: #111827;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #111827;
    box-shadow: 0 0 0 1px #111827;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Button = styled.button`
  padding: 0.875rem 1.5rem;
  font-size: 0.938rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
`;

export const CancelButton = styled(Button)`
  background: white;
  color: #111827;
  border: 1px solid #e5e7eb;

  &:hover {
    background: #f9fafb;
  }
`;

export const SubmitButton = styled(Button)`
  background: #111827;
  color: white;
  border: none;

  &:hover {
    background: #1f2937;
  }
`;

export const HelpText = styled.p`
  font-size: 0.813rem;
  color: #6b7280;
  margin-top: 0.5rem;
`;

export const ErrorText = styled.span`
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
