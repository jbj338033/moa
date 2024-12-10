import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface NoticeFormData {
  title: string;
  content: string;
  isImportant: boolean;
}

const AdminNotice = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NoticeFormData>({
    defaultValues: {
      title: "",
      content: "",
      isImportant: false,
    },
  });

  const onSubmit = async (data: NoticeFormData) => {
    const submitPromise = axios.post(
      `${import.meta.env.VITE_API_URL}/admin/notices`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    await toast.promise(submitPromise, {
      loading: "공지사항을 등록하고 있습니다...",
      success: () => {
        reset();
        return "공지사항이 성공적으로 등록되었습니다.";
      },
      error: (err) => {
        if (axios.isAxiosError(err)) {
          return err.response?.data?.message || "공지사항 등록에 실패했습니다.";
        }
        return "공지사항 등록 중 오류가 발생했습니다.";
      },
    });
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <S.Title>공지사항 관리</S.Title>
          <S.Description>
            동아리 관련 공지사항을 작성하고 관리할 수 있습니다. 중요 공지사항은
            상단에 고정됩니다.
          </S.Description>
        </S.HeaderContent>
      </S.Header>

      <S.ContentSection>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormSection>
            <S.SectionTitle>공지사항 작성</S.SectionTitle>

            <S.FormGroup>
              <S.Label>
                제목<S.Required>*</S.Required>
              </S.Label>
              <S.Input
                {...register("title", {
                  required: "제목을 입력해주세요",
                  minLength: {
                    value: 2,
                    message: "제목은 최소 2자 이상이어야 합니다",
                  },
                })}
                placeholder="공지사항 제목을 입력하세요"
              />
              {errors.title && (
                <S.ErrorText>{errors.title.message}</S.ErrorText>
              )}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>
                내용<S.Required>*</S.Required>
              </S.Label>
              <S.Textarea
                {...register("content", {
                  required: "내용을 입력해주세요",
                  minLength: {
                    value: 10,
                    message: "내용은 최소 10자 이상이어야 합니다",
                  },
                })}
                placeholder="공지사항 내용을 입력하세요"
                style={{ height: "300px" }}
              />
              {errors.content && (
                <S.ErrorText>{errors.content.message}</S.ErrorText>
              )}
            </S.FormGroup>

            <S.FormGroup>
              <S.CheckboxLabel>
                <input type="checkbox" {...register("isImportant")} />
                <span>중요 공지사항으로 등록</span>
              </S.CheckboxLabel>
              <S.HelpText>
                중요 공지사항으로 등록하면 목록 최상단에 고정되며 '필독' 뱃지가
                표시됩니다.
              </S.HelpText>
            </S.FormGroup>
          </S.FormSection>

          <S.ButtonGroup>
            <S.CancelButton type="button" onClick={() => navigate(-1)}>
              취소
            </S.CancelButton>
            <S.SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "등록 중..." : "공지사항 등록"}
            </S.SubmitButton>
          </S.ButtonGroup>
        </S.Form>
      </S.ContentSection>
    </S.Container>
  );
};

export default AdminNotice;
