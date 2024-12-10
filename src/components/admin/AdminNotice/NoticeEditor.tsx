import { useForm } from "react-hook-form";
import { BiX } from "react-icons/bi";
import * as S from "./style";

interface NoticeEditorProps {
  notice?: {
    id: string;
    title: string;
    content: string;
    isImportant: boolean;
  } | null;
  onClose: () => void;
}

interface FormData {
  title: string;
  content: string;
  isImportant: boolean;
}

const NoticeEditor = ({ notice, onClose }: NoticeEditorProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      title: notice?.title || "",
      content: notice?.content || "",
      isImportant: notice?.isImportant || false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // TODO: API 호출
      console.log("Submit data:", data);
      onClose();
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  };

  return (
    <S.EditorOverlay>
      <S.Editor>
        <S.EditorHeader>
          <S.EditorTitle>
            {notice ? "공지사항 수정" : "새 공지사항 작성"}
          </S.EditorTitle>
          <S.CloseButton onClick={onClose}>
            <BiX size={24} />
          </S.CloseButton>
        </S.EditorHeader>

        <S.EditorContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.FormGroup>
              <S.Label>제목</S.Label>
              <S.Input
                {...register("title", {
                  required: "제목을 입력해주세요",
                })}
                placeholder="공지사항 제목을 입력하세요"
              />
              {errors.title && (
                <S.ErrorText>{errors.title.message}</S.ErrorText>
              )}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>내용</S.Label>
              <S.Textarea
                {...register("content", {
                  required: "내용을 입력해주세요",
                })}
                placeholder="공지사항 내용을 입력하세요"
                rows={10}
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
            </S.FormGroup>

            <S.ButtonGroup>
              <S.Button type="button" variant="secondary" onClick={onClose}>
                취소
              </S.Button>
              <S.Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "처리 중..." : notice ? "수정하기" : "등록하기"}
              </S.Button>
            </S.ButtonGroup>
          </form>
        </S.EditorContent>
      </S.Editor>
    </S.EditorOverlay>
  );
};

export default NoticeEditor;
