import axios from "axios";

const BASE_URL = "http://54.180.114.46:3300";

export interface iTopic {
  id: number;
  rankurl: string;
  summary: string;
  keyword: string;
  male: number;
  female: number;
  age_10: number;
  age_20: number;
  age_30: number;
  age_40: number;
  age_50: number;
  age_60: number;
  subject_1: string;
  subject_2: string;
  subject_3: string;
  subject_4: string;
  subject_5: string;
  search_1: string;
  search_2: string;
  search_3: string;
  search_4: string;
  search_5: string;
}

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

export function fetchTopic(): Promise<iTopic[]> {
  return api.get("/topic").then((response) => response.data);
}

export const SAMPLE_DATA = [
  {
    id: 36,
    rankurl: "https://n.news.naver.com/article/005/0001523943?ntype=RANKING",
    summary:
      "민주당은 정호영한동훈원희룡이상민 후보자에 대해 지명 철회 또는 자진 사퇴가 이뤄지지 않을 경우 한덕수 국무총리 후보자의 인준 표결과 연계시키겠다는 구상을 감추지 않고 있다. 윤 당선인 측 핵심 관계자는 5일 국민일보와의 통화에서 한 후보자 인준을 무기로 민주당이 무리한 낙마를 요구하고 있다며 김인철 전 교육부 장관 후보자가 자진 사퇴한 상황에서 정호영 후보자에 이어 한동훈원희룡이상민 후보자의 낙마를 요구하는 것이 말이 되느냐고 주장했다. 정 후보자 임명 강행은 민주당을 향한 엄포 카드로 해석될 수 있지만 윤 당선인 측이 실제 행동으로 옮길 경우 정국은 크게 얼어붙을 것으로 예상된다.",
    keyword: "후보자",
    male: 70,
    female: 30,
    age_10: 0,
    age_20: 3,
    age_30: 16,
    age_40: 52,
    age_50: 52,
    age_60: 51,
    subject_1: "윤석열",
    subject_2: "이재명",
    subject_3: "여론",
    subject_4: "이상민",
    subject_5: "대한민국의 행정안전부 장관",
    search_1: "대통령 후보자 명단",
    search_2: "20 대 대통령 후보자 명단",
    search_3: "이재명",
    search_4: "후보자 토론회 사회자",
    search_5: "국민 의 힘",
  },
  {
    id: 37,
    rankurl: "https://n.news.naver.com/article/658/0000008864?ntype=RANKING",
    summary:
      "BIFF 공동집행위원장 역임하기도영화배우 강수연55 씨가 5일 심정지 상태로 병원에 이송됐다. 강 씨는 즉시 인근 병원으로 옮겨졌으며 현재 의식이 없는 상태로 치료를 받고 있다. 강 씨는 20152017년 BIFF 공동집행위원장으로 활동했다.",
    keyword: "영화제",
    male: 71,
    female: 29,
    age_10: 0,
    age_20: 3,
    age_30: 17,
    age_40: 103,
    age_50: 31,
    age_60: 19,
    subject_1: "영화관",
    subject_2: "구교환",
    subject_3: "풀무원",
    subject_4: "생물 다양성",
    subject_5: "로테르담 국제 영화제",
    search_1: "전주 국제 영화제 2022",
    search_2: "풀무원 29 초 영화제",
    search_3:
      "2018 년 3 월 포르투갈 판타 스 포르투 영화제 에서 최우수 작품상 과 각본 상 을 받은 한국 영화 는 무엇 인가요",
    search_4: "부산 국제 영화제 2021",
    search_5: "부산 국제 영화제 예매",
  },
  {
    id: 38,
    rankurl: "https://n.news.naver.com/article/082/0001154342?ntype=RANKING",
    summary:
      "배우 강수연이 심정지 상태로 병원에 이송됐다는 보도가 나온 가운데 그가 가장 최근에 출연한 영화 정이 측이 상황을 파악하고 있다. 연합뉴스영화배우 강수연55이 가장 최근에 출연한 영화 정이 측이 강수연의 병원 이송 보도와 관련한 상황을 파악하고 있다. 영화 정이를 공개하는 OTT온라인 동영상 서비스 넷플릭스 측 관계자는 5일 강수연 씨의 병원 이송 소식을 듣고 여러 경로로 확인 중이라고 밝혔다.",
    keyword: "강수연",
    male: 49,
    female: 51,
    age_10: 0,
    age_20: 2,
    age_30: 9,
    age_40: 52,
    age_50: 73,
    age_60: 38,
    subject_1: "심정지",
    subject_2: "사주",
    subject_3: "남편",
    subject_4: "영화배우",
    subject_5: "좀비",
    search_1: "강수연 심정지",
    search_2: "강수연 사주",
    search_3: "강수연 남편",
    search_4: "영화 배우 강수연",
    search_5: "강수지",
  },
  {
    id: 39,
    rankurl: "https://n.news.naver.com/article/656/0000011372?ntype=RANKING",
    summary:
      "총무 윤재순 공직기강 이시원 법률 주진우 등 檢 출신 발탁윤석열 대통령 당선인과 함께 할 첫 청와대 참모진 인선이 5일 발표됐다. 이번 인선에는 경제수석실 산하 6개 비서관 정무수석실 산하 2개 비서관 정책조정기획관실 산하 4개 비서관 비서실장 직속 7개 비서관 등 총 19명의 비서관이 포함됐다. 윤 당선인은 오는 8일 국가안보실과 사회수석실 시민사회수석실 홍보수석실 산하 비서관급 인선을 추가로 발표할 예정이다.",
    keyword: "대통령",
    male: 55,
    female: 45,
    age_10: 3,
    age_20: 7,
    age_30: 24,
    age_40: 73,
    age_50: 44,
    age_60: 23,
    subject_1: "아이티",
    subject_2: "출구조사",
    subject_3: "올렉산드르 젤렌스키",
    subject_4: "후보",
    subject_5: "대한민국 제20대 국회",
    search_1: "대통령 후보자 명단",
    search_2: "아이티 대통령 암살",
    search_3: "20 대 대통령 취임 일",
    search_4: "윤석열 대통령 당선",
    search_5: "허경영 지지율",
  },
  {
    id: 40,
    rankurl: "https://n.news.naver.com/article/658/0000008864?ntype=RANKING",
    summary:
      "BIFF 공동집행위원장 역임하기도영화배우 강수연55 씨가 5일 심정지 상태로 병원에 이송됐다. 강 씨는 즉시 인근 병원으로 옮겨졌으며 현재 의식이 없는 상태로 치료를 받고 있다. 강 씨는 20152017년 BIFF 공동집행위원장으로 활동했다.",
    keyword: "심정지",
    male: 55,
    female: 45,
    age_10: 0,
    age_20: 3,
    age_30: 16,
    age_40: 54,
    age_50: 61,
    age_60: 40,
    subject_1: "크리스티안 에릭센",
    subject_2: "강수연",
    subject_3: "대피소",
    subject_4: "지역",
    subject_5: "공습",
    search_1: "에릭 센 심정지",
    search_2: "에릭 센",
    search_3: "강수연 심정지",
    search_4: "민방위대 동원 명령 발령 권한",
    search_5: "민방위 불참 과태료",
  },
  {
    id: 41,
    rankurl: "https://n.news.naver.com/article/123/0002274222?ntype=RANKING",
    summary:
      "사진연합뉴스안철수 대통령직인수위원장이 오는 6일 경기 성남 분당갑 국회의원 보궐선거 출마를 선언할 것으로 알려지면서 여야 대선주자들의 재보선 출마로 판이 커지는 모양새다. 안 위원장은 6일 오후 인수위 마지막 공식 행사인 수원 지역 순회 국민 보고회 행사를 마친 뒤 보궐선거 출마에 대한 입장을 밝힐 계획이다. 앞서 안 위원장은 김은혜 전 의원의 경기지사 선거 출마로 공석이 된 분당갑 보궐선거에 나설 수 있다는 일부 관측에 대해 인수위 업무에 집중하겠다며 여러 차례 선을 그어왔다.",
    keyword: "후보",
    male: 77,
    female: 23,
    age_10: 2,
    age_20: 7,
    age_30: 14,
    age_40: 58,
    age_50: 44,
    age_60: 52,
    subject_1: "김재연",
    subject_2: "조원진",
    subject_3: "세계수",
    subject_4: "수원시장",
    subject_5: "사회주의",
    search_1: "스승님 이 나의 남편 후보 를 골라 왔다",
    search_2: "윤석열 공약",
    search_3: "김재연 후보",
    search_4: "김재연",
    search_5: "오늘 대선 지지율",
  },
  {
    id: 42,
    rankurl: "https://n.news.naver.com/article/015/0004695020?ntype=RANKING",
    summary:
      "정이 측 확인 중배우 강수연 사진최혁 기자영화배우 강수연55이 5일 심정지 상태로 병원에 이송됐다. 강수연이 통증을 호소하자 가족이 119에 신고했고 소방이 심정지 상태인 강수연을 발견해 인근 병원으로 이송했다. 강수연은 영화 정이로 9년 만에 스크린에 돌아올 예정이었다.",
    keyword: "여우주연상",
    male: 50,
    female: 50,
    age_10: 2,
    age_20: 5,
    age_30: 17,
    age_40: 66,
    age_50: 49,
    age_60: 35,
    subject_1: "청룡영화상",
    subject_2: "더쿠",
    subject_3: "청룡영화상 여우주연상",
    subject_4: "0",
    subject_5: "0",
    search_1: "여우 주연상",
    search_2: "아카데미 여우 주연상",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 43,
    rankurl: "https://n.news.naver.com/article/448/0000359009?ntype=RANKING",
    summary:
      "신변보호를 하던 경찰관들이 현장을 이탈했다가 정신병원에서 탈출한 60대 남편이 집에 들이닥쳐 흉기 난동으로 이어진 사건이 뒤늦게 알려졌다. 동행한 지구대 경찰관 2명이 집 밖에서 씨 아내를 40여 분 기다렸는데 이 때 실종아동 신고가 들어와 현장을 벗어났다. 하지만 신변보호와 동행을 요청했던 씨의 아내에게는 이 사실을 알리지 않았고 경찰이 자리를 비운 사이 씨가 집에 들이닥치고 말았다. 경찰은 동행했던 경찰관들이 집 안에 있던 씨 아내에게 현장 이탈 사실을 알리지 않은 아쉬움이 있었다며 해당 경찰관 2명에 대한 징계 여부를 검토할 방침이라고 밝혔다.",
    keyword: "병원",
    male: 62,
    female: 38,
    age_10: 0,
    age_20: 3,
    age_30: 19,
    age_40: 79,
    age_50: 52,
    age_60: 19,
    subject_1: "항원",
    subject_2: "중합효소 연쇄 반응",
    subject_3: "검사",
    subject_4: "진료소",
    subject_5: "의정부시",
    search_1: "병원 신속 항원 검사",
    search_2: "신속 항원 검사",
    search_3: "아옳 이 병원",
    search_4: "김사랑 정신 병원",
    search_5: "pcr 검사 병원",
  },
  {
    id: 44,
    rankurl: "https://n.news.naver.com/article/032/0003145075?ntype=RANKING",
    summary:
      "대통령실 비서관급 1차 인선 살펴보니경향신문 주진우이시원윤재순 등 검찰 출신 약진 두드러져정책조정기획관실 신설 눈길19명 중 9명이 관료윤석열 대통령 당선인이 5일 1차로 발표한 대통령비서실 비서관급 인사의 특징은 검찰 출신의 전면 배치다. 정책조정기획관실을 신설해 장성민 당선인 정무특보를 정책조정기획관으로 임명했고 소위 진보정부에서 운영됐던 국정상황실장도 보수정부로선 처음으로 유지했다. 정책조정기획관은 비서관급 인사에서 발표가 됐지만 조직을 총괄하는 역할로 1급과 차관급 사이다. 2실장 5수석으로 축소하면서 사라진 정책실장 자리를 축소 보완한 역할로 보인다.",
    keyword: "비서",
    male: 66,
    female: 34,
    age_10: 2,
    age_20: 9,
    age_30: 24,
    age_40: 70,
    age_50: 45,
    age_60: 23,
    subject_1: "Nipple",
    subject_2: "지아",
    subject_3: "누드 글래머 모델",
    subject_4: "우루과이",
    subject_5: "김혜경",
    search_1: "국민 비서 국민 지원금",
    search_2: "국민 지원금",
    search_3: "국민 비서 지원금",
    search_4: "지아",
    search_5: "철구 비서 지아",
  },
  {
    id: 45,
    rankurl: "https://n.news.naver.com/article/056/0011261193?ntype=RANKING",
    summary:
      "소방당국에 따르면 강 씨는 오늘5일 오후 5시 50분쯤 서울 강남구 자택에서 통증을 호소하다 심정지 상태로 인근 병원으로 이송됐습니다. 병원 관계자는 강 씨가 심정지 상태로 이송돼 치료를 받고 있는 것은 맞다면서 심정지 원인에 대해서는 아직 파악된 정보가 없다고 밝혔습니다. 사진 출처 연합뉴스 제보하기▷ 카카오톡 KBS제보 검색▷ 전화 027811234▷ 이메일 kbs1234kbs.co.kr▷ 뉴스홈페이지 httpsgoo.gl4bWbkG다.",
    keyword: "영화배우",
    male: 78,
    female: 22,
    age_10: 0,
    age_20: 2,
    age_30: 9,
    age_40: 61,
    age_50: 73,
    age_60: 30,
    subject_1: "류지현",
    subject_2: "청불학원",
    subject_3: "강수연",
    subject_4: "Setflix: Ill Advised Vs. Ill Advised",
    subject_5: "영화 제작",
    search_1: "조개 무비",
    search_2: "미카미 유아",
    search_3: "청불 학원",
    search_4: "영화 배우 진선미",
    search_5: "영화 배우 강수연",
  },
  {
    id: 46,
    rankurl: "https://n.news.naver.com/article/214/0001194686?ntype=RANKING",
    summary:
      "문 대통령 부부는 도심에서 멀리 떨어진 지역의 분교 어린이들을 청와대로 초청했고 윤 당선인은 자신이 사는 아파트 이웃 어린이들과 기념사진을 남겼습니다. 외교 행사가 열리던 영빈관은 물론 대통령 경호차량도 어린이들에게 문을 열었고 문재인 대통령 부부도 공 굴리기와 종이 뒤집기 등 놀이를 함께했습니다. 문재인 대통령청와대 녹지원에서 어린이날을 보내는 마지막 어린이가 됐어요",
    keyword: "어린이",
    male: 50,
    female: 50,
    age_10: 2,
    age_20: 2,
    age_30: 21,
    age_40: 77,
    age_50: 44,
    age_60: 28,
    subject_1: "헌법재판소",
    subject_2: "헌법",
    subject_3: "국립민속박물관 어린이박물관",
    subject_4: "경기도어린이박물관",
    subject_5: "대한민국 문화재청",
    search_1: "어린이 날 100 주년",
    search_2: "어린이 정보 포털",
    search_3: "어린이 날 선물 순위 2022",
    search_4: "대한 적십자사 어린이 이용 시설 안전 교육 연수원",
    search_5: "어린이 코로나 백신",
  },
  {
    id: 47,
    rankurl: "https://n.news.naver.com/article/057/0001661059?ntype=RANKING",
    summary:
      "정호영 딸 조국 딸 서울대 장학금 받았다는박주민 의원 글 공유이번에도 검찰은 압수수색을?전날4일에는 한동훈 딸 엄빠찬스 만평 게재도조국 전 장관왼 한동훈 법무부 장관 후보자오 사진 유튜브 캡처 연합뉴스윤석열 대통령 당선인이 검찰 재직 시절 딸 조민 씨에게 행해졌던 수사 방식대로 다른 이들에게도 똑같은 잣대를 들이대라고 주장하고 있는 조국 전 법무부 장관이 이번에는 한동훈 법무부 장관 후보자의 딸을 겨냥했습니다. 라는 논란이 있었고 검찰은 2019년 8월 27일 관악회를 압수수색했다며 이 관악회 특지장학금 재력이라면 남 부러울 것이 없는 정호영 복지부 장관 후보자의 딸도 받았다고 한다고 지적했습니다. 이후 한 차례 더 입장문을 내고는 한겨레는 전날 한 후보자 취재를 통해 딸 이름으로 기부한 사실이 없음을 인지하고도 후보자의 딸이 기업에서 노트북 50대를 받아 딸 이름으로 기부한 것처럼 허위로 보도하고 그 허위 사실에 근거해 딸이 기부증서를 들고 있는 허위 만평까지 게재했다며 미성년자의 봉사활동에 허위사실을 덧씌워 보도한 한겨레 등을 상대로 강력한 법적 대응을 검토할 계획이라고 예고했습니다.",
    keyword: "장관",
    male: 63,
    female: 37,
    age_10: 2,
    age_20: 5,
    age_30: 19,
    age_40: 65,
    age_50: 45,
    age_60: 38,
    subject_1: "이상민",
    subject_2: "이종섭",
    subject_3: "박진",
    subject_4: "외로움",
    subject_5: "한동훈",
    search_1: "한동훈 법무부 장관",
    search_2: "이상민 장관",
    search_3: "내무부 장관 드립",
    search_4: "이종호 장관",
    search_5: "이종섭",
  },
  {
    id: 48,
    rankurl: "https://n.news.naver.com/article/056/0011261192?ntype=RANKING",
    summary:
      "안철수 대통령직인수위원장이 6월 1일 국회의원 보궐선거에서 경기 성남 분당갑 출마 의사를 사실상 확정했습니다. 안 위원장 측 관계자는 안 위원장이 분당갑 보궐선거 출마를 결심했다면서 내일6일 출마 의사를 밝힐 것이라고 밝혔습니다. 안 위원장은 그동안 당 안팎에서 김은혜 전 의원의 경기지사 선거 출마로 공석이 된 성남 분당갑 보궐선거에 나설 수 있다는 관측이 제기돼 왔습니다.",
    keyword: "위원장",
    male: 76,
    female: 24,
    age_10: 2,
    age_20: 2,
    age_30: 19,
    age_40: 47,
    age_50: 56,
    age_60: 47,
    subject_1: "고승범",
    subject_2: "박주민",
    subject_3: "경선",
    subject_4: "탄소 중립",
    subject_5: "박광온",
    search_1: "노정희 위원장",
    search_2: "노정희",
    search_3: "고승범 금융 위원장",
    search_4: "인수 위원장 역할",
    search_5: "안철수 인수 위원장",
  },
  {
    id: 49,
    rankurl: "https://n.news.naver.com/article/031/0000670630?ntype=RANKING",
    summary:
      "시민단체 역사 유적지 훼손 반발국내 첫 글로벌 테마파크인 레고랜드 코리아LEGOLND® Korea가 5일 어린이날 공식 개장했다. 혈세낭비 레고랜드 중단 촉구 범시민대책위원회 관계자들은 레고랜드 앞에서 기자회견을 열고 선사유적을 깔아뭉개고 직무유기한 문화재청장과 인허가 관청인 강원도와 춘천시는 불법 개장을 강행한 책임을 분명히 져야 하고 앞으로 발생할 모든 일에 책임을져야 한다고 주장했다. 배 원내대표는 공사를 진행하는 과정에서도 유적지에 대량의 쓰레기를 매립하는 등 온갖 불법을 자행했다며 강원도 또한 개장 전까지 48기의 고인돌 이전 복원 선사 유적공원과 유물전시관 건립을 전제로 문화재청으로부터 레고랜드 사업을 허가받은 것이지만 개장이 코앞인 지금 44기의 고인돌은 비닐포대에 담긴 채 최대 8년이나 방치돼 있다고 강조했다.",
    keyword: "레고랜드",
    male: 61,
    female: 39,
    age_10: 0,
    age_20: 9,
    age_30: 21,
    age_40: 105,
    age_50: 30,
    age_60: 10,
    subject_1: "보신탕",
    subject_2: "맥도날드",
    subject_3: "팩",
    subject_4: "SK하이닉스",
    subject_5: "어린이날",
    search_1: "레고 랜드 입장료",
    search_2: "레고 랜드 개장",
    search_3: "맥도날드 레고 랜드",
    search_4: "레고 랜드 투게더 팩",
    search_5: "하이닉스 레고 랜드",
  },
  {
    id: 50,
    rankurl: "https://n.news.naver.com/article/661/0000006401?ntype=RANKING",
    summary:
      "예약 증가세 주도한라체육관월드컵경기장 기념행사 곳곳 축제장 ​연휴를 앞둔 4일 4만 3천 명이 제주를 찾아 당초 예상치를 웃돈 것으로 나타났습니다. ​거리두기에 마스크를 없앤 첫 황금연휴를 맞아 제주행 비행기에선 빈 자리를 찾기가 어려울 지경이 되어 버렸습니다. ​​급기야 5일 어린이날은 예상치를 8천 명 넘어선 5만 1000명이 제주를 찾을 것으로 나타나 연휴 관광객이 절정을 맞을 것으로 보입니다. ​항공좌석 사실상 완판...예상치 넘었다​제주도관광협회에 따르면 연휴를 앞둔 4일 4만 3888명이 제주를 찾은 것으로 집계됐습니다. 4만 1천여 명을 예상했던게 그보다 2천 명이 늘었습니다. ​통상 운항하는 180여 석 B737800 기준으로 11편을 더 띄웠다 치면 빈 자리 없이 모두 채워 나른 셈입니다. 도관광협회 관계자는 연휴 입도객은 플러스 마이너스 2천 명 수준 편차를 보인다며 2천 명이 늘었다는건 그만큼 연휴가 닥쳐서 제주로 나선 이른바 임박 예약들이 밀리고 있다는 뜻으로 해석했습니다. ​회복단계라고는 하지만 아직 해외로 나서기엔 창구가 비좁은데다 내륙권 연휴 스팟들을 찾기에는 늦었고 그렇다고 황금연휴를 집콕으로 보내기 아쉬운 가족 단위 수요가 제주를 택하면서 쏠림 현상을 빚는 것으로 보고 있습니다. ​어린이날 오전부터 매진...5만 명 넘을 듯​4일 김포발 제주행 오후 항공편이 대부분 매진된데 이어 5일 어린이날 당일은 더욱 좌석난이 예상됩니다. 밑돌더라도 일 방문객이 5만 명에 육박한 수준이라 하늘길은 물론 제주공항은 관광객 발길이 종일 이어질 것으로 보입니다. ​항공사 관계자는 닷새동안 90%를 웃도는 좌석 예약률을 보이는데 계속 수요가 몰리는 상황이어서 이 기간 주요 시간대는 거의 좌석을 비우지 않고 운항한다고 봐도 무방하다며 연휴 마지막 날까지도 제주를 찾는 발길이 몰리면서 혼잡이 불가피할 것으로 예상된다고 말했습니다. ​관련 업계 특수 기대는 큽니다.",
    keyword: "마스크",
    male: 49,
    female: 51,
    age_10: 0,
    age_20: 3,
    age_30: 17,
    age_40: 72,
    age_50: 59,
    age_60: 23,
    subject_1: "다각형",
    subject_2: "해제",
    subject_3: "무성 치경 파찰음",
    subject_4: "마기",
    subject_5: "메타마스크",
    search_1: "실외 마스크 해제",
    search_2: "마스크 해제 날짜",
    search_3: "메타 마스크 폴리곤",
    search_4: "오 미크론 마스크",
    search_5: "이블린 마스크",
  },
  {
    id: 51,
    rankurl: "https://n.news.naver.com/article/056/0011261193?ntype=RANKING",
    summary:
      "소방당국에 따르면 강 씨는 오늘5일 오후 5시 50분쯤 서울 강남구 자택에서 통증을 호소하다 심정지 상태로 인근 병원으로 이송됐습니다. 병원 관계자는 강 씨가 심정지 상태로 이송돼 치료를 받고 있는 것은 맞다면서 심정지 원인에 대해서는 아직 파악된 정보가 없다고 밝혔습니다. 사진 출처 연합뉴스 제보하기▷ 카카오톡 KBS제보 검색▷ 전화 027811234▷ 이메일 kbs1234kbs.co.kr▷ 뉴스홈페이지 httpsgoo.gl4bWbkG다.",
    keyword: "배우",
    male: 60,
    female: 40,
    age_10: 12,
    age_20: 10,
    age_30: 35,
    age_40: 49,
    age_50: 28,
    age_60: 38,
    subject_1: "허이재",
    subject_2: "박용기",
    subject_3: "남문철",
    subject_4: "강요",
    subject_5: "낙태",
    search_1: "김선호 k 배우",
    search_2: "대세 배우 k",
    search_3: "k 배우 낙태",
    search_4: "스포츠 아나운서 배우",
    search_5: "박용기 배우",
  },
  {
    id: 52,
    rankurl: "https://n.news.naver.com/article/032/0003145011?ntype=RANKING",
    summary:
      "인수위사진기자단장제원 대통령 당선인 비서실장이 5일 더불어민주당이 한덕수 국무총리 후보자의 인준을 거부할 가능성에 대해 민심과 동떨어진 일들은 민주당에 이롭지 않다고 본다며 민주당에서 국민 선택에 의해 만들어진 새 정부가 출범하는 데 협조하면 좋겠다고 말했다. 장 실장은 우상호 민주당 의원이 윤석열 대통령 당선인의 배우자 김건희 여사가 대통령 관저로 결정된 외교부 장관 공관을 둘러보며 개를 끌고 와 70대가 넘은 외교부 장관 사모님에게 잠깐 나가 있어달라고 했다고 주장하는 것에 대해서는 강하게 비판했다. 장 실장은 후보자가 자진 사퇴한 교육부 장관 인선에 대해서는 기존 검증 대상에 있었던 분들과 함께 새로운 분도 새 각도에서 살펴보고 있다고 말했다.",
    keyword: "민주당",
    male: 66,
    female: 34,
    age_10: 0,
    age_20: 3,
    age_30: 16,
    age_40: 59,
    age_50: 63,
    age_60: 33,
    subject_1: "박지현",
    subject_2: "카광",
    subject_3: "비대",
    subject_4: "새로운보수당",
    subject_5: "선거인단",
    search_1: "이재명 갤러리",
    search_2: "박지현 민주당",
    search_3: "박지현",
    search_4: "민주당 선거인단 신청",
    search_5: "민주당 황영선",
  },
  {
    id: 53,
    rankurl: "https://n.news.naver.com/article/308/0000030807?ntype=RANKING",
    summary:
      "조복희씨는 발달장애인인 아들 황동현씨에게 왜 삭발을 해야 하는지 설명해주었다. 동현씨의 기척에 엄마 조복희씨51도 잠에서 깼다. 복희씨는 동현씨가 첫 생일을 맞을 때쯤 어딘가 다르다는 생각을 했다.",
    keyword: "청와대",
    male: 64,
    female: 36,
    age_10: 2,
    age_20: 3,
    age_30: 19,
    age_40: 61,
    age_50: 52,
    age_60: 37,
    subject_1: "김건희",
    subject_2: "박성민",
    subject_3: "김대기",
    subject_4: "문성근",
    subject_5: "전우용",
    search_1: "이렇게 된 이상 청와대 로 간다 다시 보기",
    search_2: "청와대 이전 이유",
    search_3: "윤석열 청와대 이전",
    search_4: "이렇게 된 이상 청와대 로 간다 토렌트",
    search_5: "청와대 개방 예약",
  },
  {
    id: 54,
    rankurl: "https://n.news.naver.com/article/123/0002274222?ntype=RANKING",
    summary:
      "사진연합뉴스안철수 대통령직인수위원장이 오는 6일 경기 성남 분당갑 국회의원 보궐선거 출마를 선언할 것으로 알려지면서 여야 대선주자들의 재보선 출마로 판이 커지는 모양새다. 안 위원장은 6일 오후 인수위 마지막 공식 행사인 수원 지역 순회 국민 보고회 행사를 마친 뒤 보궐선거 출마에 대한 입장을 밝힐 계획이다. 앞서 안 위원장은 김은혜 전 의원의 경기지사 선거 출마로 공석이 된 분당갑 보궐선거에 나설 수 있다는 일부 관측에 대해 인수위 업무에 집중하겠다며 여러 차례 선을 그어왔다.",
    keyword: "출마",
    male: 68,
    female: 32,
    age_10: 2,
    age_20: 12,
    age_30: 28,
    age_40: 47,
    age_50: 49,
    age_60: 35,
    subject_1: "최재형",
    subject_2: "심상정",
    subject_3: "박근령",
    subject_4: "위원회",
    subject_5: "김은혜",
    search_1: "대통령 출마 공탁금",
    search_2: "이준석",
    search_3: "윤석열 출마 선언",
    search_4: "이재명 출마 선언",
    search_5: "허경영 대선 출마",
  },
  {
    id: 55,
    rankurl: "https://n.news.naver.com/article/055/0000971381?ntype=RANKING",
    summary:
      "<앵커>민주당 대선 후보였던 이재명 상임고문이 다음 달 1일 지방선거와 같이 치러지는 국회의원 보궐선거에 나서야 한다는 목소리가 당 안에서 계속 나오고 있습니다. 안철수 대통령직인수위원장은 보궐선거에 나설지 여부를 내일6일 밝힐 것으로 보입니다. 민주당을 지켜달라 이재명을 계양하라 등 송영길 전 대표의 서울시장 출마로 다음 달 1일 지방선거와 함께 열리는 인천 계양을 국회의원 보궐선거에 이 고문 출마를 요청하는 글이 이어집니다.",
    keyword: "분당",
    male: 55,
    female: 45,
    age_10: 2,
    age_20: 7,
    age_30: 21,
    age_40: 66,
    age_50: 51,
    age_60: 30,
    subject_1: "식중독",
    subject_2: "김밥",
    subject_3: "실종자",
    subject_4: "Zypac",
    subject_5: "온화한",
    search_1: "분당 서현고 실종",
    search_2: "분당 김밥 식중독",
    search_3: "분당 마녀 김밥",
    search_4: "마녀 김밥",
    search_5: "분당 서현고 김휘성",
  },
  {
    id: 56,
    rankurl: "https://n.news.naver.com/article/055/0000971378?ntype=RANKING",
    summary:
      "국민의힘이 법안 발의에 나선 배경까지 강청완 기자의 단독 보도입니다. <기자>권성동 국민의힘 원내대표는 내일 여성가족부 폐지를 담은 정부조직법 개정안을 대표 발의한다고 밝혔습니다. 당초 새 정부 출범 뒤 다른 부처 개편안을 모두 담은 정부조직법 개정안을 국민의힘이 제출할 것으로 예상됐지만 여가부 폐지만 담은 개정안을 먼저 제출하겠다는 것입니다. 권 원내대표는 여성가족부 폐지는 윤석열 대통령 당선인이 내 건 국민과의 약속이자 대선 핵심 공약이라며 법안 발의 배경을 설명했습니다.",
    keyword: "국민",
    male: 63,
    female: 37,
    age_10: 0,
    age_20: 2,
    age_30: 7,
    age_40: 40,
    age_50: 72,
    age_60: 54,
    subject_1: "청첩장",
    subject_2: "불륜",
    subject_3: "솔로몬",
    subject_4: "내일은 국민가수",
    subject_5: "자유통일당",
    search_1: "국민 은행 임 민주",
    search_2: "임 민주",
    search_3: "국민 상생 지원금",
    search_4: "국민 은행 불륜",
    search_5: "박창근",
  },
  {
    id: 57,
    rankurl: "https://n.news.naver.com/article/056/0011261193?ntype=RANKING",
    summary:
      "소방당국에 따르면 강 씨는 오늘5일 오후 5시 50분쯤 서울 강남구 자택에서 통증을 호소하다 심정지 상태로 인근 병원으로 이송됐습니다. 병원 관계자는 강 씨가 심정지 상태로 이송돼 치료를 받고 있는 것은 맞다면서 심정지 원인에 대해서는 아직 파악된 정보가 없다고 밝혔습니다. 사진 출처 연합뉴스 제보하기▷ 카카오톡 KBS제보 검색▷ 전화 027811234▷ 이메일 kbs1234kbs.co.kr▷ 뉴스홈페이지 httpsgoo.gl4bWbkG다.",
    keyword: "영화",
    male: 63,
    female: 37,
    age_10: 2,
    age_20: 5,
    age_30: 23,
    age_40: 79,
    age_50: 52,
    age_60: 16,
    subject_1: "발신제한",
    subject_2: "인질",
    subject_3: "싱크홀",
    subject_4: "올드",
    subject_5: "더 보이스",
    search_1: "누누 영화",
    search_2: "영화 다시 보기 누누",
    search_3: "무료 영화 누누",
    search_4: "인민 을 위해 복무 하라 영화 다시 보기",
    search_5: "인민 을 위해 복무 하라 다시 보기",
  },
  {
    id: 58,
    rankurl: "https://n.news.naver.com/article/417/0000810306?ntype=RANKING",
    summary:
      "사진장동규 기자 국내 첫 글로벌 테마파크인 강원 춘천 레고랜드 코리아 리조트가 5일 공식 개장했다. 존 야콥슨 멀린 엔터테이먼트 총괄 사장이 5일 강원 춘천시 중도동 레고랜드코리아리조트 놀이시설 출입구 앞에서 공식 개장 기념 행사에서 취재진 질문에 답하고 있다. 사진장동규 기자 필 로일 사장은 이날 환영사에서 어린이와 가족들을 위한 춘천 레고랜드가 어린이날 개장하게 돼",
    keyword: "어린이날",
    male: 49,
    female: 51,
    age_10: 2,
    age_20: 3,
    age_30: 16,
    age_40: 66,
    age_50: 47,
    age_60: 42,
    subject_1: "우리 아이가 달라졌어요",
    subject_2: "1930",
    subject_3: "국립중앙박물관",
    subject_4: "현충일",
    subject_5: "레고랜드 코리아 리조트",
    search_1: "2022 어린이 날",
    search_2: "어린이 날 100 주년",
    search_3: "어린이 날 선물 순위 2022",
    search_4: "추석",
    search_5: "중학생 어린이 날 선물 추천",
  },
  {
    id: 59,
    rankurl: "https://n.news.naver.com/article/008/0004742248?ntype=RANKING",
    summary:
      "2016.10.12 강수연 부산국제영화제 집행위원장 인터뷰 사진이동훈 기자 photoguy영화배우 강수연씨가 5일 심정지 상태로 병원에 후송됐다. 이날 경찰과 소방당국 등에 따르면 강씨는 오후 5시40분쯤 강남 지역에서 심정지 상태로 발견돼 CPR을 받으며 인근 병원으로 옮겨졌다. 임권택 감독의 영화 씨받이로 베니스 영화제 최우수여배우상을 수상하고 아제아제 바라아제로 당시 공산권 최고 권위의 모스크바영화제 최우수여배우상을 받는 등 한국 대중영화계에 한 획을 그은 여배우다.",
    keyword: "강씨",
    male: 67,
    female: 33,
    age_10: 0,
    age_20: 2,
    age_30: 14,
    age_40: 63,
    age_50: 59,
    age_60: 37,
    subject_1: "스토킹",
    subject_2: "N번방 사건",
    subject_3: "소년",
    subject_4: "조선 태종",
    subject_5: "제주시",
    search_1: "n 번방 강씨",
    search_2: "0",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 60,
    rankurl: "https://n.news.naver.com/article/422/0000540704?ntype=RANKING",
    summary:
      "뉴스리뷰앵커윤석열 정부 국정과제 발표 후 불거진 공약 파기 논란에 대해 당선인 측이 해명에 나섰습니다. 기자여성가족부 폐지 윤석열 대통령 당선인은 후보 시절 SNS에 이 일곱 글자 공약을 올리며 이른바 이대남 표심을 공략했습니다. 하지만 대통령직 인수위원회가 새 정부 출범을 앞두고 발표한 110개의 국정과제에선 관련 공약이 사라져 논란에 불이 붙었습니다. 병사 봉급 200만원과 GTX 확충 공약 역시 구체적인 이행 방안을 다시 한 번 설명하며 차질 없이 실현하겠단 입장을 재확인했습니다.",
    keyword: "공약",
    male: 65,
    female: 35,
    age_10: 2,
    age_20: 3,
    age_30: 17,
    age_40: 66,
    age_50: 47,
    age_60: 40,
    subject_1: "민영화",
    subject_2: "투표율",
    subject_3: "전과",
    subject_4: "이회창",
    subject_5: "보도자료",
    search_1: "윤석열 공약 정리",
    search_2: "윤석열 대선 공약",
    search_3: "이재명 윤석열 공약 비교",
    search_4: "윤석열 부동산",
    search_5: "이재명 공약 정리",
  },
  {
    id: 61,
    rankurl: "https://n.news.naver.com/article/088/0000756950?ntype=RANKING",
    summary:
      "안성완 기자 asw0727imaeil.com5일 경북 구미국가산업단지 한 공장에서 시작된 불이 주변 공장으로 번지면서 소방당국이 8시간째 화재 진압에 애를 먹고 있다. 당국은 신고 12분 만에 관할 소방서의 모든 인력과 장비를 투입하는 대응 1단계를 발령 소방관 415명과 소방차 54대 헬기 3대 굴삭기 2대 등을 투입해 진화에 나섰다. 하지만 불이 주변 공장으로 옮겨 붙으면서 진화에 어려움을 겪고 있다. 5일 오후 12시 14분 쯤 경북 구미시 공단동 한 가구제조 공장에서 화재가 발생했다.",
    keyword: "공장",
    male: 71,
    female: 29,
    age_10: 0,
    age_20: 3,
    age_30: 14,
    age_40: 61,
    age_50: 63,
    age_60: 31,
    subject_1: "빨강",
    subject_2: "슈의 초코공장 (아바타 스타)",
    subject_3: "대장장이",
    subject_4: "0",
    subject_5: "0",
    search_1: "민영 활어 공장",
    search_2: "스마트 공장 1 번가",
    search_3: "sue game 인간 공장",
    search_4: "던킨 도너츠 공장",
    search_5: "슈 의 아이스크림",
  },
  {
    id: 62,
    rankurl: "https://n.news.naver.com/article/417/0000810306?ntype=RANKING",
    summary:
      "사진장동규 기자 국내 첫 글로벌 테마파크인 강원 춘천 레고랜드 코리아 리조트가 5일 공식 개장했다. 존 야콥슨 멀린 엔터테이먼트 총괄 사장이 5일 강원 춘천시 중도동 레고랜드코리아리조트 놀이시설 출입구 앞에서 공식 개장 기념 행사에서 취재진 질문에 답하고 있다. 사진장동규 기자 필 로일 사장은 이날 환영사에서 어린이와 가족들을 위한 춘천 레고랜드가 어린이날 개장하게 돼",
    keyword: "개장",
    male: 68,
    female: 32,
    age_10: 0,
    age_20: 3,
    age_30: 12,
    age_40: 61,
    age_50: 56,
    age_60: 40,
    subject_1: "레고랜드",
    subject_2: "레고랜드 코리아 리조트",
    subject_3: "논산시",
    subject_4: "오시리아역",
    subject_5: "창덕궁 후원",
    search_1: "경복궁 야간 개장 2022",
    search_2: "레고 랜드 개장",
    search_3: "레고 랜드",
    search_4: "해수욕장 개장 날짜 2021",
    search_5: "창경궁 야간 개장 2022",
  },
  {
    id: 63,
    rankurl: "https://n.news.naver.com/article/293/0000039002?ntype=RANKING",
    summary:
      "사진LG전자LG전자가 차량용 반도체 설계 구현 검증 등 개발 프로세스 전반에 대한 기술을 확보했다고 5일 밝혔다. LG전자가 차량용 반도체 개발에 나선 건 안정적인 공급망 확보와 원가 경쟁력 강화 차원으로 보인다. 김진경 LG전자 SIC센터장 상무는 자동차 핵심 부품인 차량용 반도체의 기능 안전성을 세계 최고 수준으로 개발할 수 있도록 체계와 역량을 확보해 나가겠다고 강조했다.",
    keyword: "반도체",
    male: 72,
    female: 28,
    age_10: 0,
    age_20: 2,
    age_30: 14,
    age_40: 72,
    age_50: 58,
    age_60: 28,
    subject_1: "로블록스 코퍼레이션",
    subject_2: "NYSEARCA:SPY",
    subject_3: "NYSEARCA:LIT",
    subject_4: "NASDAQ:QQQ",
    subject_5: "나스닥 100",
    search_1: "리 비안 주가",
    search_2: "lx 세미콘",
    search_3: "루시드 주가",
    search_4: "카카오 뱅크 주가",
    search_5: "베스타스 주가",
  },
  {
    id: 64,
    rankurl: "https://n.news.naver.com/article/658/0000008858?ntype=RANKING",
    summary:
      "떼지어 굉음 운행 관광객 깜짝 놀라고 예불 차질도해경 레저금지구역 아니고 신출귀몰 잡기도 어려워부산의 대표 사찰인 기장군의 해동용궁사가 제트 스키 출몰에 몸살을 앓고 있다. 해경이 신고받고 현장에 출동하고는 있지만 애매한 단속 근거와 신출귀몰한 제트 스키 탓에 제대로 된 단속을 못 하는 실정이다. 관광객 김모50대 씨도 사진을 찍다가 굉음이나 쳐다보니 제트 스키가 있어 깜짝 놀랐다고 말했다.",
    keyword: "정이",
    male: 48,
    female: 52,
    age_10: 0,
    age_20: 3,
    age_30: 19,
    age_40: 79,
    age_50: 58,
    age_60: 14,
    subject_1: "권창훈",
    subject_2: "마인:MINE",
    subject_3: "마포구",
    subject_4: "정이서",
    subject_5: "불의 여신 정이",
    search_1: "권창훈 정이 수",
    search_2: "권창훈",
    search_3: "마인",
    search_4: "불의 여신 정이",
    search_5: "트위터 정이",
  },
  {
    id: 65,
    rankurl: "https://n.news.naver.com/article/032/0003145023?ntype=RANKING",
    summary:
      "경향신문 당선인 대변인실 공약 파기 논란 진화여가부 폐지 기능역할 검토 후 추진2025년까지 병사 월급 인상 기준 충족지난 1월 9일 윤석열 당시 국민의힘 대선 후보 페이스북 캡쳐윤석열 대통령 당선인 측이 5일 여성가족부 폐지 병사 월급 200만원으로 즉시 인상 등 일부 공약이 후퇴했다는 지적에 진화에 나섰다. 대변인실은 다만 여가부 장관을 중심으로 여가부가 수행하고 있는 기능과 역할 등에 대한 면밀한 검토와 충분한 사회적 논의를 거쳐 추진할 것이라며 공약 실천을 위한 정부조직법 개정도 새 정부 출범 후 해당 부처를 중심으로 심도 있는 검토 후 추진할 계획이라고 밝혔다. 윤 당선인 대변인실은 다른 입장문에서 병사 월급 200만원으로 인상과 GTX수도권광역급행철도 확충 공약을 거론하며 윤석열 정부는 국민과의 약속은 반드시 지킬 것이라고 밝혔다.",
    keyword: "당선인",
    male: 74,
    female: 26,
    age_10: 0,
    age_20: 7,
    age_30: 30,
    age_40: 56,
    age_50: 45,
    age_60: 35,
    subject_1: "매니페스토",
    subject_2: "대변인",
    subject_3: "이명박",
    subject_4: "정책",
    subject_5: "문재인",
    search_1: "당선인 지지율",
    search_2: "대통령 당선인",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
];
