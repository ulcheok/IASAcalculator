// 과목 순서별 학점 가중치 설정
const creditsMap = [3,3,3,3,3,3,2,2,2,2,2]; // 수I, 수II, 물리, 화학, 생명, 지학, 정보, 국어, 한국사, 영어, 지재일

// 등급별 평점 매핑 (IASA 기준)
const gradePoint = {
  'A+': 4.3,
  'A' : 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B' : 3.0,
  'B-': 2.7
};

// GPA 계산 함수
function calculateGPA() {
  const grades = Array.from(document.querySelectorAll('.grade')).map(el => el.value);
  
  let totalPoints = 0;
  let totalCredits = 0;

  grades.forEach((g, i) => {
    const gp = gradePoint[g] || 0;
    const cr = creditsMap[i];
    totalPoints += gp * cr;
    totalCredits += cr;
  });

  const gpa = totalCredits ? (totalPoints / totalCredits) : 0;
  document.getElementById('gpa').textContent = gpa.toFixed(2);
}

// 이벤트 리스너 등록 (등급 변경 시 자동 계산)
document.querySelectorAll('.grade').forEach(el =>
  el.addEventListener('change', calculateGPA)
);

// 페이지 로드 시 초기 계산 한 번 실행
calculateGPA();
