import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const TitleArea = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #6b7280;
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #111827;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.938rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #1f2937;
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ClubCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ClubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ClubName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

export const ClubActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface ActionButtonProps {
  variant?: "danger";
}

export const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: ${({ variant }) =>
    variant === "danger" ? "#fef2f2" : "#f3f4f6"};
  color: ${({ variant }) => (variant === "danger" ? "#ef4444" : "#6b7280")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ variant }) =>
      variant === "danger" ? "#fee2e2" : "#e5e7eb"};
    color: ${({ variant }) => (variant === "danger" ? "#dc2626" : "#374151")};
  }
`;

export const ClubDescription = styled.p`
  font-size: 0.938rem;
  color: #4b5563;
  line-height: 1.5;
`;

export const ClubInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const ClubFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

interface StatusBadgeProps {
  status: "active" | "inactive";
}

export const StatusBadge = styled.span<StatusBadgeProps>`
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${({ status }) => (status === "active" ? "#ecfdf5" : "#f3f4f6")};
  color: ${({ status }) => (status === "active" ? "#059669" : "#6b7280")};
`;

export const ViewDetailsButton = styled.button`
  background: none;
  border: none;
  color: #6366f1;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: #eef2ff;
  }
`;

// Editor Styles
export const EditorOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 50;
`;

export const Editor = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  max-height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
`;

export const EditorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const EditorTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    color: #111827;
  }
`;

export const EditorContent = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
`;

export const FormSection = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);

    &:last-child {
      grid-column: span 2;
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.938rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.938rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #111827;
    box-shadow: 0 0 0 1px #111827;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.938rem;
  resize: vertical;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #111827;
    box-shadow: 0 0 0 1px #111827;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.938rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;

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

interface ButtonProps {
  variant?: "secondary";
}

export const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  border: ${({ variant }) =>
    variant === "secondary" ? "1px solid #e5e7eb" : "none"};
  border-radius: 8px;
  background: ${({ variant }) =>
    variant === "secondary" ? "white" : "#111827"};
  color: ${({ variant }) => (variant === "secondary" ? "#111827" : "white")};
  font-size: 0.938rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ variant }) =>
      variant === "secondary" ? "#f9fafb" : "#1f2937"};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
