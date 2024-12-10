import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import * as S from "./style";

interface FormData {
  club: string;
  experience: string;
  motivation: string;
  availability: string;
}

const Apply = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      club: "",
      experience: "",
      motivation: "",
      availability: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const submitPromise = axios.post(
      `${import.meta.env.VITE_API_URL}/apply`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    await toast.promise(submitPromise, {
      loading: "지원서를 제출하고 있습니다...",
      success: () => {
        navigate("/");
        return "지원서가 성공적으로 제출되었습니다.";
      },
      error: (err) => {
        if (axios.isAxiosError(err)) {
          return err.response?.data?.message || "지원서 제출에 실패했습니다.";
        }
        return "지원서 제출 중 오류가 발생했습니다.";
      },
    });
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <S.Title>동아리 지원하기</S.Title>
          <S.Description>
            DGSW 동아리에 지원하고 여러분의 열정을 보여주세요. 모든 필수 항목을
            정확하게 작성해주시기 바랍니다.
          </S.Description>
        </S.HeaderContent>
      </S.Header>

      <S.ContentSection>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormSection>
            <S.SectionTitle>지원 정보</S.SectionTitle>
            <S.FormGroup>
              <S.Label>
                지원 동아리<S.Required>*</S.Required>
              </S.Label>
              <S.Select
                {...register("club", {
                  required: "지원할 동아리를 선택해주세요",
                })}
              >
                <option value="">지원할 동아리를 선택하세요</option>
                <option value="b1nd">B1ND</option>
                <option value="cns">CNS</option>
                <option value="dms">DMS</option>
                <option value="appdev">AppDev</option>
              </S.Select>
              {errors.club && <S.ErrorText>{errors.club.message}</S.ErrorText>}
            </S.FormGroup>
          </S.FormSection>

          <S.FormSection>
            <S.SectionTitle>자기소개</S.SectionTitle>
            <S.FormGroup>
              <S.Label>
                관련 경험<S.Required>*</S.Required>
              </S.Label>
              <S.Textarea
                {...register("experience", {
                  required: "관련 경험을 입력해주세요",
                  minLength: {
                    value: 50,
                    message: "최소 50자 이상 작성해주세요",
                  },
                })}
                placeholder="관련된 경험이나 프로젝트에 대해 설명해주세요"
              />
              {errors.experience && (
                <S.ErrorText>{errors.experience.message}</S.ErrorText>
              )}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>
                지원 동기<S.Required>*</S.Required>
              </S.Label>
              <S.Textarea
                {...register("motivation", {
                  required: "지원 동기를 입력해주세요",
                  minLength: {
                    value: 50,
                    message: "최소 50자 이상 작성해주세요",
                  },
                })}
                placeholder="동아리에 지원하게 된 동기를 설명해주세요"
              />
              {errors.motivation && (
                <S.ErrorText>{errors.motivation.message}</S.ErrorText>
              )}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>
                활동 가능 시간<S.Required>*</S.Required>
              </S.Label>
              <S.Input
                {...register("availability", {
                  required: "활동 가능 시간을 입력해주세요",
                })}
                placeholder="평일 방과후 활동 가능 시간을 입력하세요"
              />
              {errors.availability && (
                <S.ErrorText>{errors.availability.message}</S.ErrorText>
              )}
              <S.HelpText>예시: 매일 방과후, 화/목 방과후 등</S.HelpText>
            </S.FormGroup>
          </S.FormSection>

          <S.ButtonGroup>
            <S.CancelButton type="button" onClick={() => navigate(-1)}>
              취소
            </S.CancelButton>
            <S.SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "제출 중..." : "지원서 제출"}
            </S.SubmitButton>
          </S.ButtonGroup>
        </S.Form>
      </S.ContentSection>
    </S.Container>
  );
};

export default Apply;
