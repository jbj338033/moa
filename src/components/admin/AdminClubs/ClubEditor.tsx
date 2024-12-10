import { useForm } from "react-hook-form";
import { BiX } from "react-icons/bi";
import * as S from "./style";

interface ClubEditorProps {
  club?: {
    id: string;
    name: string;
    description: string;
    leader: {
      name: string;
      grade: number;
      class: number;
      number: number;
    };
    status: "active" | "inactive";
  } | null;
  onClose: () => void;
}

interface FormData {
  name: string;
  description: string;
  leaderName: string;
  leaderGrade: number;
  leaderClass: number;
  leaderNumber: number;
  status: "active" | "inactive";
}

const ClubEditor = ({ club, onClose }: ClubEditorProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: club?.name || "",
      description: club?.description || "",
      leaderName: club?.leader.name || "",
      leaderGrade: club?.leader.grade || 1,
      leaderClass: club?.leader.class || 1,
      leaderNumber: club?.leader.number || 1,
      status: club?.status || "active",
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
            {club ? "동아리 정보 수정" : "새 동아리 등록"}
          </S.EditorTitle>
          <S.CloseButton onClick={onClose}>
            <BiX size={24} />
          </S.CloseButton>
        </S.EditorHeader>

        <S.EditorContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.FormSection>
              <S.SectionTitle>동아리 정보</S.SectionTitle>
              <S.FormGroup>
                <S.Label>동아리명</S.Label>
                <S.Input
                  {...register("name", {
                    required: "동아리명을 입력해주세요",
                  })}
                  placeholder="동아리 이름을 입력하세요"
                />
                {errors.name && (
                  <S.ErrorText>{errors.name.message}</S.ErrorText>
                )}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>소개</S.Label>
                <S.Textarea
                  {...register("description", {
                    required: "소개를 입력해주세요",
                  })}
                  placeholder="동아리 소개를 입력하세요"
                  rows={4}
                />
                {errors.description && (
                  <S.ErrorText>{errors.description.message}</S.ErrorText>
                )}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>상태</S.Label>
                <S.Select {...register("status")}>
                  <option value="active">활동중</option>
                  <option value="inactive">비활동</option>
                </S.Select>
              </S.FormGroup>
            </S.FormSection>

            <S.FormSection>
              <S.SectionTitle>부장 정보</S.SectionTitle>
              <S.FormGroup>
                <S.Label>이름</S.Label>
                <S.Input
                  {...register("leaderName", {
                    required: "부장 이름을 입력해주세요",
                  })}
                  placeholder="부장 이름을 입력하세요"
                />
                {errors.leaderName && (
                  <S.ErrorText>{errors.leaderName.message}</S.ErrorText>
                )}
              </S.FormGroup>

              <S.FormRow>
                <S.FormGroup>
                  <S.Label>학년</S.Label>
                  <S.Select {...register("leaderGrade")}>
                    <option value={1}>1학년</option>
                    <option value={2}>2학년</option>
                    <option value={3}>3학년</option>
                  </S.Select>
                </S.FormGroup>

                <S.FormGroup>
                  <S.Label>반</S.Label>
                  <S.Select {...register("leaderClass")}>
                    {Array.from({ length: 4 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}반
                      </option>
                    ))}
                  </S.Select>
                </S.FormGroup>

                <S.FormGroup>
                  <S.Label>번호</S.Label>
                  <S.Select {...register("leaderNumber")}>
                    {Array.from({ length: 20 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {String(i + 1).padStart(2, "0")}번
                      </option>
                    ))}
                  </S.Select>
                </S.FormGroup>
              </S.FormRow>
            </S.FormSection>

            <S.ButtonGroup>
              <S.Button type="button" variant="secondary" onClick={onClose}>
                취소
              </S.Button>
              <S.Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "처리 중..." : club ? "수정하기" : "등록하기"}
              </S.Button>
            </S.ButtonGroup>
          </form>
        </S.EditorContent>
      </S.Editor>
    </S.EditorOverlay>
  );
};

export default ClubEditor;
