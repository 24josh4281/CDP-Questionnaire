const state = {
  index: null,
  filtered: [],
  selectedCode: "",
  detailCache: new Map(),
  density: "comfortable",
  activeLevel: "",
  activeSector: "",
  lang: "ko",
};

const UI = {
  ko: {
    appTitle: "문항명·응답방법·드롭다운·평가방법론 DB",
    sourcePrefix: "변경 추적표",
    metricQuestions: "전체 문항",
    metricChanged: "변경 반영",
    metricPpt: "정성 PPT",
    metricExcel: "정량 Excel",
    metricNoChange: "변경 없음 확인",
    searchTitle: "검색",
    reset: "초기화",
    searchInput: "문항번호 / 키워드",
    module: "모듈",
    location: "반영 위치",
    type: "응답 방법",
    flag: "변경 범주",
    sector: "섹터",
    changedOnly: "변경 반영 문항만 보기",
    questionList: "문항 목록",
    comfortable: "표준",
    compact: "촘촘히",
    allModules: "전체 모듈",
    all: "전체",
    allTypes: "전체 응답 방법",
    allFlags: "전체 변경 범주",
    allSectors: "전체 섹터",
    total: "전체",
    questions: "문항",
    changed: "변경",
    changedApplied: "변경 반영",
    noChangeVerified: "변경 없음 확인",
    results: "개 문항 표시",
    loadingDetail: "상세 데이터를 불러오는 중입니다.",
    noResults: "조건에 맞는 문항이 없습니다.",
    reduceFilters: "필터를 줄이거나 다른 키워드를 입력하세요.",
    selectQuestion: "문항을 선택하세요.",
    selectHint: "문항명, 응답 방법, 드롭다운, D/A/M/L 배점, 평가방법론이 이 영역에 표시됩니다.",
    englishOriginal: "영문 원문",
    koreanTranslation: "국문 번역",
    changeStatus: "2025 대비 변경사항",
    basicInfo: "문항 기본정보",
    responseMethod: "응답 방법",
    tableStructure: "입력 테이블 구조",
    dropdownOptions: "드롭다운 / 응답 선택지",
    pointAllocation: "D/A/M/L 평가 배점",
    scoringCriteria: "평가방법론",
    reportingGuidance: "공시 가이던스",
    sources: "출처",
    changedYes: "변경 있음",
    changedNo: "변경 없음",
    questionName: "문항명",
    responseChanged: "응답방법",
    optionsChanged: "드롭다운/선택지",
    guidanceChanged: "가이던스",
    scoringChanged: "평가방법론",
    changeState: "변경 상태",
    detailChangeType: "세부 변경유형",
    changeSummary: "변경 요약",
    scoringChangeSummary: "평가방법론 변경 요약",
    reflected: "반영 내용",
    reflectionPlace: "반영 위치",
    responseType: "응답 유형",
    mandatory: "필수 여부",
    issue: "환경 이슈",
    previousCode: "2025 문항번호",
    previousTitle: "2025 문항명",
    sectorTags: "섹터 태그",
    help: "도움말",
    methodIntro: "이 문항의 응답 방식과 입력 타입입니다. 드롭다운 선택지는 아래 별도 섹션에서 확인합니다.",
    column: "열",
    inputType: "입력 타입",
    required: "필수",
    rowItem: "행 / 항목",
    noDropdown: "드롭다운 선택지가 없거나 자유 입력형 문항입니다.",
    questionOptions: "문항 선택지",
    fixedRowsPreview: "고정 행",
    shownPreview: "개 중 미리보기",
    noPoints: "이 문항의 Climate Change 배점 데이터가 없습니다.",
    noCriteria: "이 문항의 Climate Change 평가기준 데이터가 없습니다.",
    noCriteriaSelection: "선택한 섹터/레벨의 평가기준이 없습니다.",
    noGuidance: "가이던스 데이터가 없습니다.",
    sector: "섹터",
    level: "레벨",
    route: "구분",
  },
  en: {
    appTitle: "Question, Response Method, Dropdown, and Scoring DB",
    sourcePrefix: "Changes Tracker",
    metricQuestions: "All questions",
    metricChanged: "Changed",
    metricPpt: "Qualitative PPT",
    metricExcel: "Quantitative Excel",
    metricNoChange: "Verified no change",
    searchTitle: "Search",
    reset: "Reset",
    searchInput: "Question code / keyword",
    module: "Module",
    location: "Location",
    type: "Response method",
    flag: "Change category",
    sector: "Sector",
    changedOnly: "Show changed questions only",
    questionList: "Question list",
    comfortable: "Normal",
    compact: "Compact",
    allModules: "All modules",
    all: "All",
    allTypes: "All response methods",
    allFlags: "All change categories",
    allSectors: "All sectors",
    total: "All",
    questions: " questions",
    changed: "changed",
    changedApplied: "Changed",
    noChangeVerified: "No change verified",
    results: " questions shown",
    loadingDetail: "Loading question detail.",
    noResults: "No matching questions.",
    reduceFilters: "Reduce filters or try another keyword.",
    selectQuestion: "Select a question.",
    selectHint: "Question title, response method, dropdowns, D/A/M/L points, and scoring criteria will appear here.",
    englishOriginal: "English original",
    koreanTranslation: "Korean translation",
    changeStatus: "Changes From 2025",
    basicInfo: "Question Overview",
    responseMethod: "Response Method",
    tableStructure: "Input Table Structure",
    dropdownOptions: "Dropdown / Response Options",
    pointAllocation: "D/A/M/L Point Allocation",
    scoringCriteria: "Scoring Methodology",
    reportingGuidance: "Reporting Guidance",
    sources: "Sources",
    changedYes: "Changed",
    changedNo: "No change",
    questionName: "Question title",
    responseChanged: "Response method",
    optionsChanged: "Dropdown/options",
    guidanceChanged: "Guidance",
    scoringChanged: "Scoring methodology",
    changeState: "Change status",
    detailChangeType: "Detailed change type",
    changeSummary: "Change summary",
    scoringChangeSummary: "Scoring change summary",
    reflected: "Reflected content",
    reflectionPlace: "Location",
    responseType: "Response type",
    mandatory: "Mandatory",
    issue: "Environmental issue",
    previousCode: "2025 question code",
    previousTitle: "2025 question title",
    sectorTags: "Sector tags",
    help: "Simple help",
    methodIntro: "This section shows the response method and input type. Dropdown values are separated below.",
    column: "Column",
    inputType: "Input type",
    required: "Required",
    rowItem: "Row / item",
    noDropdown: "No dropdown options, or this is a free-text question.",
    questionOptions: "Question options",
    fixedRowsPreview: "Showing",
    shownPreview: "fixed rows as preview",
    noPoints: "No Climate Change point allocation data for this question.",
    noCriteria: "No Climate Change scoring criteria data for this question.",
    noCriteriaSelection: "No scoring criteria for the selected sector/level.",
    noGuidance: "No guidance data.",
    sector: "Sector",
    level: "Level",
    route: "Route",
  },
};

const SECTOR_KO = {
  "Agricultural commodities": "농산물 원자재",
  Aviation: "항공",
  "Capital goods": "자본재",
  Cement: "시멘트",
  Chemicals: "화학",
  Coal: "석탄",
  Construction: "건설",
  "Energy utilities & power generators": "에너지 유틸리티 및 발전",
  "Financial services": "금융 서비스",
  "Food, beverage & tobacco": "식음료 및 담배",
  "Metals & mining": "금속 및 광업",
  "Oil & Gas": "석유 및 가스",
  "Paper & forestry": "제지 및 임업",
  "Real estate": "부동산",
  Steel: "철강",
  "Transport services": "운송 서비스",
  "Transport OEMS": "운송 OEM",
  "Transport OEMS - EPM": "운송 OEM - EPM",
};

const LOCATION_LABELS = {
  ko: { PPT: "정성 PPT", Excel: "정량 Excel" },
  en: { PPT: "Qualitative PPT", Excel: "Quantitative Excel" },
};

const FLAG_LABELS = {
  ko: {
    question: "문항명 변경",
    response: "응답방법/의존성/검증 변경",
    options: "드롭다운/행/열 변경",
    guidance: "가이던스/용어 변경",
    scoring: "평가방법론 변경",
  },
  en: {
    question: "Question title changed",
    response: "Response method/dependency changed",
    options: "Dropdown/row/column changed",
    guidance: "Guidance/terms changed",
    scoring: "Scoring methodology changed",
  },
};

const $ = (id) => document.getElementById(id);
const t = (key) => UI[state.lang][key] || UI.ko[key] || key;

const KO_DISPLAY_REPLACEMENTS = [
  [/No change; 신규 문항 에 대한 해양/g, "변경 없음; 해양 신규 문항"],
  [/Minor change; 신규 문항 에 대한 해양/g, "경미한 변경; 해양 신규 문항"],
  [/설명 의 Terms/g, "용어 설명"],
  [/Question Dependencies/g, "문항 의존성"],
  [/Change From Last Year/g, "전년 대비 변경사항"],
  [/Requested Content/g, "요청 내용"],
  [/Additional Information/g, "추가 정보"],
  [/Explanation of Terms/g, "용어 설명"],
  [/For '([^']+)' 행\(s\):/gi, "$1 행:"],
  [/For '([^']+)' row\(s\):/gi, "$1 행:"],
  [/비공개 경로\) 열 '([^']+)' NOT 완성/gi, "비공개 경로) '$1' 열 미작성"],
  [/\bNOT 완성\b/gi, "미작성"],
  [/\bNOT completed\b/gi, "미작성"],
  [/선택 in 열/gi, "열에서 선택"],
  [/in 열/gi, "열에서"],
  [/awarded in 문항/gi, "문항에서 부여"],
  [/관리 점 awarded/gi, "관리 점수 부여"],
  [/최고점 획득 in 문항/gi, "문항에서 최고점 획득"],
  [/하나 이상 option 제외/gi, "다음 선택지를 제외한 1개 이상"],
  [/Environmental 리스크 exist, but none with the potential to have a substantive effect on our organization/gi, "환경 리스크는 존재하지만 조직에 중대한 영향을 미칠 수 있는 잠재적 리스크는 없음"],
  [/Evaluation in progress/gi, "평가 진행 중"],
  [/Yes, both in 직접 운영사업장 및 upstream\/다운스트림 가치사슬/gi, "예, 직접 운영 및 업스트림/다운스트림 가치사슬 모두 해당"],
  [/Yes, both in direct operation 및 upstream\/다운스트림 가치사슬/gi, "예, 직접 운영 및 업스트림/다운스트림 가치사슬 모두 해당"],
  [/direct operations/gi, "직접 운영사업장"],
  [/upstream\/downstream value chain/gi, "업스트림/다운스트림 가치사슬"],
  [/upstream value chain/gi, "업스트림 가치사슬"],
  [/downstream value chain/gi, "다운스트림 가치사슬"],
  [/value chain/gi, "가치사슬"],
  [/environmental risks/gi, "환경 리스크"],
  [/environmental risk/gi, "환경 리스크"],
  [/risk exposure/gi, "리스크 노출"],
  [/substantive effects/gi, "중대한 영향"],
  [/substantive effect/gi, "중대한 영향"],
  [/reporting year/gi, "보고연도"],
  [/financial position/gi, "재무상태"],
  [/financial performance/gi, "재무성과"],
  [/cash flows/gi, "현금흐름"],
  [/business activities/gi, "사업 활동"],
  [/business resilience/gi, "사업 회복력"],
  [/environmental stewardship/gi, "환경 책임 이행"],
  [/legal obligations/gi, "법적 의무"],
  [/material business risks/gi, "중대한 사업 리스크"],
  [/material business risk/gi, "중대한 사업 리스크"],
  [/plastic waste/gi, "플라스틱 폐기물"],
  [/inherent risk/gi, "내재 리스크"],
  [/residual risk/gi, "잔여 리스크"],
  [/mitigation or management measures/gi, "완화 또는 관리 조치"],
  [/current and anticipated financial effects/gi, "현재 및 예상 재무 영향"],
  [/response strategy/gi, "대응 전략"],
  [/manage and mitigate/gi, "관리 및 완화"],
  [/accepted risks/gi, "수용한 리스크"],
  [/responding risks/gi, "대응 중인 리스크"],
  [/Please explain/gi, "설명"],
  [/Other, 직접 입력/gi, "기타, 직접 입력"],
  [/Risk identifier/gi, "리스크 식별 코드"],
  [/Primary response to risk/gi, "리스크 주요 대응"],
  [/Cost of response to risk/gi, "리스크 대응 비용"],
  [/Description of response/gi, "대응 설명"],
  [/Risk types and primary environmental risk driver/gi, "리스크 유형 및 주요 환경 리스크 요인"],
  [/Country\/area where the risk occurs/gi, "리스크 발생 국가/지역"],
  [/River basin where the risk occurs/gi, "리스크가 발생하는 강 유역"],
  [/Organization-specific description of risk/gi, "조직에 특화된 리스크 세부 설명"],
  [/End-of-life 관리/g, "수명 종료 단계 관리"],
  [/Banking \(Bank\)/gi, "은행업(은행)"],
  [/Investing \(Asset manager\)/gi, "투자(자산운용사)"],
  [/Investing \(Asset owner\)/gi, "투자(자산소유자)"],
  [/Insurance underwriting \(Insurance company\)/gi, "보험 인수(보험사)"],
  [/Insurance underwriting 포트폴리오/gi, "보험 인수 포트폴리오"],
  [/Virtually certain/gi, "사실상 확실"],
  [/Very likely/gi, "매우 가능성 높음"],
  [/Likely/gi, "가능성 높음"],
  [/More likely than not/gi, "발생 가능성이 더 높음"],
  [/About as likely as not/gi, "발생 가능성과 미발생 가능성이 비슷함"],
  [/Very unlikely/gi, "매우 가능성 낮음"],
  [/Exceptionally unlikely/gi, "극히 가능성 낮음"],
  [/\bUnlikely\b/gi, "가능성 낮음"],
  [/\bUnknown\b/gi, "알 수 없음"],
  [/\bHigh\b/g, "높음"],
  [/Medium-high/g, "중간-높음"],
  [/\bMedium\b/g, "중간"],
  [/Medium-low/g, "중간-낮음"],
  [/\bLow\b/g, "낮음"],
  [/Brand damage/gi, "브랜드 훼손"],
  [/Change in 매출 mix 및 sources/gi, "매출 구성 및 원천 변화"],
  [/Closure of operations/gi, "운영 중단"],
  [/Constraint to g행th/gi, "성장 제약"],
  [/Decreased access to capital/gi, "자본 접근성 감소"],
  [/Decrease in shareholder value/gi, "주주가치 감소"],
  [/Carbon pricing mechanisms/gi, "탄소가격제 메커니즘"],
  [/Changes to national legislation/gi, "국내 법규 변경"],
  [/Changes to international law 및 bilateral agreements/gi, "국제법 및 양자 협정 변경"],
  [/Changes to regulation of existing 제품 및 서비스/gi, "기존 제품 및 서비스 규제 변경"],
  [/Rupture 의 tailings dams/gi, "광미댐 붕괴"],
  [/Rupture of tailings dams/gi, "광미댐 붕괴"],
  [/Declining 수자원 quality/gi, "수질 저하"],
  [/Changing wind patterns/gi, "풍향 패턴 변화"],
  [/Change 에서 land-use\/담수\/해양 use/gi, "토지 이용/담수/해양 이용 변화"],
  [/macro 또는 microplastic leakage 에 air, soil, 담수/gi, "대형 또는 미세 플라스틱의 대기, 토양, 담수 누출"],
  [/partner 및 이해관계자 concern/gi, "파트너 및 이해관계자 우려"],
  [/negative feedback 에서 partners 및 이해관계자 feedback/gi, "파트너 및 이해관계자의 부정적 피드백"],
  [/Appearance 의 multiple 드롭다운 changed 에 appear 에 more environmental themes/gi, "여러 드롭다운이 더 많은 환경 테마에 표시되도록 변경"],
  [/점수가 부여됩니다 per 완성된 칸\(셀\) 에서 proportion 에 number 의 표시된 칸\(셀\)/gi, "표시된 칸(셀) 수에 비례하여 완성된 칸(셀)마다 점수가 부여됩니다"],
  [/선택 에서 열/gi, "열에서 선택"],
  [/에서 최소 one 행/gi, "최소 1개 행에서"],
  [/에서 all 행/gi, "모든 행에서"],
  [/의 this 데이터/gi, "이 데이터의"],
  [/since 기준/gi, "기준상"],
  [/instead 의/gi, "대신"],
  [/adjusted 에서/gi, "조정되어"],
  [/updated 요구하기 위해/gi, "다음을 요구하도록 업데이트됨:"],
  [/to check/gi, "확인하기 위해"],
  [/made 에서 열/gi, "열에서 이루어진"],
  [/in accordance 와\/과/gi, "다음과 일치하도록"],
  [/of 가치사슬 stage/gi, "가치사슬 단계의"],
  [/\bClarification\b/gi, "명확화"],
  [/\bupdated\b/gi, "업데이트됨"],
  [/\bapplicability\b/gi, "적용 조건"],
  [/\bFinancial institutions\b/gi, "금융기관"],
  [/\bfinancial institutions\b/gi, "금융기관"],
  [/\borganizations\b/gi, "조직"],
  [/\borganization\b/gi, "조직"],
  [/\bcompanies\b/gi, "기업"],
  [/\bcompany\b/gi, "기업"],
  [/\bmeasure\b/gi, "측정"],
  [/\bmeasuring\b/gi, "측정"],
  [/\bdisclose\b/gi, "공시"],
  [/\bdiscloses\b/gi, "공시합니다"],
  [/\breported\b/gi, "보고된"],
  [/\breport\b/gi, "보고"],
  [/\bappears\b/gi, "표시됩니다"],
  [/\bpresented\b/gi, "표시됩니다"],
  [/\bselect\b/gi, "선택"],
  [/\bselected\b/gi, "선택됨"],
  [/\bprovide\b/gi, "제공"],
  [/\bprovided\b/gi, "제공된"],
  [/\binclude\b/gi, "포함"],
  [/\bincludes\b/gi, "포함합니다"],
  [/\bconsider\b/gi, "고려"],
  [/\bconsidering\b/gi, "고려할 때"],
  [/\bcurrent\b/gi, "현재"],
  [/\bfuture\b/gi, "미래"],
  [/\bexpected\b/gi, "예상되는"],
  [/\banticipated\b/gi, "예상되는"],
  [/\bactivities\b/gi, "활동"],
  [/\bassets\b/gi, "자산"],
  [/\bliabilities\b/gi, "부채"],
  [/\brevenue\b/gi, "매출"],
  [/\bexpenditure\b/gi, "지출"],
  [/\bstrategy\b/gi, "전략"],
  [/\bmarket\b/gi, "시장"],
  [/\breputation\b/gi, "평판"],
  [/\btechnology\b/gi, "기술"],
  [/\bliability\b/gi, "법적 책임"],
  [/\bpolicy\b/gi, "정책"],
  [/\blegal\b/gi, "법률"],
  [/\bdata\b/gi, "데이터"],
  [/\bcriteria\b/gi, "기준"],
  [/\bscoring\b/gi, "평가"],
  [/\boption\b/gi, "선택지"],
  [/\boptions\b/gi, "선택지"],
  [/\bcolumn\b/gi, "열"],
  [/\bcolumns\b/gi, "열"],
  [/\brow\b/gi, "행"],
  [/\brows\b/gi, "행"],
  [/\bquestion\b/gi, "문항"],
  [/\bquestions\b/gi, "문항"],
  [/\bone\b/gi, "1개"],
  [/\ball\b/gi, "모든"],
  [/\bboth\b/gi, "모두"],
  [/\bonly\b/gi, "만"],
  [/\bif\b/gi, "만약"],
  [/\bwhere\b/gi, "여기서"],
  [/\bwhether\b/gi, "여부"],
  [/\bwith\b/gi, "와/과"],
  [/\bwithout\b/gi, "없이"],
  [/\bwithin\b/gi, "내"],
  [/\bfrom\b/gi, "에서"],
  [/\bfor\b/gi, "에 대한"],
  [/\bthrough\b/gi, "통해"],
  [/\bbetween\b/gi, "간"],
  [/\bafter\b/gi, "이후"],
  [/\bbefore\b/gi, "이전"],
  [/\bthan\b/gi, "보다"],
  [/\bother\b/gi, "기타"],
  [/\band\/or\b/gi, "및/또는"],
  [/\band\b/gi, "및"],
  [/\bor\b/gi, "또는"],
  [/water-related/gi, "수자원 관련"],
  [/processing\/manufacturing/gi, "가공/제조"],
  [/production/gi, "생산"],
  [/distribution/gi, "유통"],
  [/consumption/gi, "소비"],
  [/products and services/gi, "제품 및 서비스"],
  [/products/gi, "제품"],
  [/services/gi, "서비스"],
  [/disclosure/gi, "공시"],
  [/concrete/gi, "콘크리트"],
  [/coal/gi, "석탄"],
  [/chemicals/gi, "화학"],
  [/real estate/gi, "부동산"],
  [/construction/gi, "건설"],
  [/electric utilities/gi, "전력 유틸리티"],
  [/transport modes/gi, "운송수단"],
  [/transport/gi, "운송"],
  [/metals and mining/gi, "금속 및 광업"],
  [/oil and gas/gi, "석유 및 가스"],
  [/capital goods/gi, "자본재"],
  [/low-carbon/gi, "저탄소"],
  [/research and development/gi, "연구개발"],
  [/over last three 연도/gi, "최근 3년 동안"],
  [/planned over next 5 연도/gi, "향후 5년 동안 계획된"],
  [/by country\/area/gi, "국가/지역별"],
  [/by sector/gi, "섹터별"],
  [/by greenhouse gas type/gi, "온실가스 유형별"],
  [/business division/gi, "사업부"],
  [/facility/gi, "시설"],
  [/feedstocks/gi, "원료"],
  [/generated and consumed/gi, "생산 및 소비한"],
  [/purchases accounted/gi, "구매량 산정"],
  [/near-zero emission factor/gi, "제로 또는 거의 제로 배출계수"],
  [/cash neutrality/gi, "현금 중립성"],
  [/cash flow/gi, "현금흐름"],
  [/share buybacks/gi, "자사주 매입"],
  [/dividends paid/gi, "지급 배당금"],
  [/environmental information/gi, "환경 정보"],
  [/environmental requirements/gi, "환경 요구사항"],
  [/environmental issues/gi, "환경 이슈"],
  [/financial effect/gi, "재무 영향"],
  [/financed emissions/gi, "금융배출량"],
  [/clients\/investees/gi, "고객/투자대상"],
  [/client\/investee/gi, "고객/투자대상"],
  [/due diligence/gi, "실사"],
  [/decision-making/gi, "의사결정"],
  [/as part of/gi, "의 일부로"],
  [/part of/gi, "일부"],
  [/related to/gi, "관련된"],
  [/relating to/gi, "관련된"],
  [/pertaining to/gi, "관련된"],
  [/\bconsiders\b/gi, "고려하는"],
  [/\bconsidered\b/gi, "고려된"],
  [/\binfluences\b/gi, "영향을 미칩니다"],
  [/\binfluence\b/gi, "영향"],
  [/\babout\b/gi, "관련"],
  [/\byour\b/gi, "귀사의"],
  [/\bours\b/gi, "당사의"],
  [/\bour\b/gi, "당사의"],
  [/\bthey\b/gi, "그들은"],
  [/\btheir\b/gi, "그들의"],
  [/\bthem\b/gi, "그들을"],
  [/\bevaluates\b/gi, "평가합니다"],
  [/\bevaluate\b/gi, "평가"],
  [/\benable\b/gi, "가능하게 합니다"],
  [/\benables\b/gi, "가능하게 합니다"],
  [/\bmitigate\b/gi, "완화"],
  [/\badapt\b/gi, "적응"],
  [/\brestate\b/gi, "재작성"],
  [/\bactivity\b/gi, "활동"],
  [/\binformation\b/gi, "정보"],
];

function displayText(value) {
  let out = String(value ?? "");
  if (state.lang !== "ko" || !out) return out;
  for (const [pattern, replacement] of KO_DISPLAY_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nl(value) {
  return escapeHtml(value).replaceAll("\n", "<br>");
}

function richText(value) {
  const raw = displayText(value).trim();
  if (!raw) return "";
  const normalized = raw
    .replace(/\r\n/g, "\n")
    .replace(/\s*•\s*/g, "\n• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const lines = normalized
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const bulletCount = lines.filter((line) => /^•\s+/.test(line)).length;
  if (bulletCount < 2) return nl(normalized);

  const blocks = [];
  let list = [];
  const flushList = () => {
    if (!list.length) return;
    blocks.push(`<ul class="bullet-list">${list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`);
    list = [];
  };

  for (const line of lines) {
    if (/^•\s+/.test(line)) {
      list.push(line.replace(/^•\s+/, ""));
    } else {
      flushList();
      blocks.push(`<p>${escapeHtml(line)}</p>`);
    }
  }
  flushList();
  return `<div class="rich-text">${blocks.join("")}</div>`;
}

function compact(value, max = 180) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text.length <= max ? text : `${text.slice(0, max - 3)}...`;
}

function chip(text, className = "") {
  if (!text) return "";
  return `<span class="chip ${className}">${escapeHtml(text)}</span>`;
}

function codeParts(code) {
  return String(code)
    .split(".")
    .map((part) => Number.parseInt(part, 10) || 0);
}

function compareCode(a, b) {
  const aa = codeParts(a);
  const bb = codeParts(b);
  const len = Math.max(aa.length, bb.length);
  for (let i = 0; i < len; i += 1) {
    const diff = (aa[i] || 0) - (bb[i] || 0);
    if (diff) return diff;
  }
  return 0;
}

function levelOrder(level) {
  return { D: 1, A: 2, M: 3, L: 4 }[level] || 9;
}

function textBy(item, enKey, koKey) {
  if (!item) return "";
  const value = state.lang === "ko" ? item[koKey] || item[enKey] || "" : item[enKey] || item[koKey] || "";
  return state.lang === "ko" ? displayText(value) : value;
}

function altTextBy(item, enKey, koKey) {
  if (!item) return "";
  return state.lang === "ko" ? item[enKey] || "" : item[koKey] || "";
}

function locationLabel(location) {
  return LOCATION_LABELS[state.lang][location] || location || "";
}

function sectorLabel(sector) {
  return state.lang === "ko" ? SECTOR_KO[sector] || sector : sector;
}

function reviewStatus(change) {
  return state.lang === "ko" ? change?.review_statusKo || change?.review_status || "" : change?.review_statusEn || change?.review_status || "";
}

function boolKo(value) {
  if (state.lang === "ko") return value === "True" || value === true ? "예" : "아니요";
  return value === "True" || value === true ? "Yes" : "No";
}

function setText(id, value) {
  const node = $(id);
  if (node) node.textContent = value;
}

function setSelectFirstOption(id, text) {
  const option = $(id)?.querySelector("option[value='']");
  if (option) option.textContent = text;
}

function setSelectOptionText(id, value, text) {
  const option = $(id)?.querySelector(`option[value="${value}"]`);
  if (option) option.textContent = text;
}

async function loadIndex() {
  const response = await fetch("./data/index.json");
  if (!response.ok) throw new Error(`index.json load failed: ${response.status}`);
  state.index = await response.json();
  state.filtered = state.index.questions;
}

function populateFilters() {
  $("moduleFilter").querySelectorAll("option:not([value=''])").forEach((option) => option.remove());
  $("typeFilter").querySelectorAll("option:not([value=''])").forEach((option) => option.remove());
  $("sectorFilter").querySelectorAll("option:not([value=''])").forEach((option) => option.remove());

  for (const module of state.index.modules) {
    $("moduleFilter").insertAdjacentHTML(
      "beforeend",
      `<option value="${escapeHtml(module.module)}">M${escapeHtml(module.module)} · ${escapeHtml(compact(textBy(module, "title", "titleKo"), 34))}</option>`,
    );
  }
  for (const type of state.index.questionTypes) {
    const sample = state.index.questions.find((question) => question.questionType === type);
    const label = state.lang === "ko" ? sample?.questionTypeKo || type : type;
    $("typeFilter").insertAdjacentHTML("beforeend", `<option value="${escapeHtml(type)}">${escapeHtml(label)}</option>`);
  }
  for (const sector of state.index.sectors) {
    $("sectorFilter").insertAdjacentHTML("beforeend", `<option value="${escapeHtml(sector)}">${escapeHtml(sectorLabel(sector))}</option>`);
  }
}

function updateStaticLabels() {
  document.documentElement.lang = state.lang === "ko" ? "ko" : "en";
  setText("appTitle", t("appTitle"));
  setText("labelMetricQuestions", t("metricQuestions"));
  setText("labelMetricChanged", t("metricChanged"));
  setText("labelMetricPpt", t("metricPpt"));
  setText("labelMetricExcel", t("metricExcel"));
  setText("labelMetricNoChange", t("metricNoChange"));
  setText("labelSearchTitle", t("searchTitle"));
  setText("resetButton", t("reset"));
  setText("labelSearchInput", t("searchInput"));
  setText("labelModule", t("module"));
  setText("labelLocation", t("location"));
  setText("labelType", t("type"));
  setText("labelFlag", t("flag"));
  setText("labelSector", t("sector"));
  setText("labelChangedOnly", t("changedOnly"));
  setText("labelQuestionList", t("questionList"));
  setText("densityComfortable", t("comfortable"));
  setText("densityCompact", t("compact"));
  setSelectFirstOption("moduleFilter", t("allModules"));
  setSelectFirstOption("locationFilter", t("all"));
  setSelectFirstOption("typeFilter", t("allTypes"));
  setSelectFirstOption("flagFilter", t("allFlags"));
  setSelectFirstOption("sectorFilter", t("allSectors"));
  setSelectOptionText("locationFilter", "PPT", LOCATION_LABELS[state.lang].PPT);
  setSelectOptionText("locationFilter", "Excel", LOCATION_LABELS[state.lang].Excel);
  for (const [value, label] of Object.entries(FLAG_LABELS[state.lang])) {
    setSelectOptionText("flagFilter", value, label);
  }
  $("searchInput").placeholder = state.lang === "ko" ? "예: 2.2, Scope 3, target, ETS" : "e.g. 2.2, Scope 3, target, ETS";
  for (const button of document.querySelectorAll(".lang-button")) {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  }
}

function renderMetrics() {
  const { counts } = state.index;
  setText("metricQuestions", counts.questions);
  setText("metricChanged", counts.changed);
  setText("metricPpt", counts.ppt);
  setText("metricExcel", counts.excel);
  setText("metricNoChange", counts.verifiedNoChange);
  const source = state.index.sourceInfo?.[1] || {};
  const version = textBy(source, "version", "versionKo") || state.index.generatedAt;
  setText("sourceVersion", `${t("sourcePrefix")} · ${version}`);
}

function renderModules() {
  const activeModule = $("moduleFilter").value;
  const allChanged = state.index.counts.changed;
  const allCount = state.index.counts.questions;
  const allProgress = Math.round((allChanged / allCount) * 100);
  const items = [
    `<button class="module-button ${activeModule === "" ? "active" : ""}" data-module="" type="button">
      <strong>${t("total")}</strong>
      <span>${allCount}${t("questions")} · ${t("changed")} ${allChanged}</span>
      <div class="module-progress"><i style="width:${allProgress}%"></i></div>
    </button>`,
    ...state.index.modules.map((module) => {
      const progress = module.count ? Math.round((module.changed / module.count) * 100) : 0;
      return `<button class="module-button ${activeModule === module.module ? "active" : ""}" data-module="${escapeHtml(module.module)}" type="button">
        <strong>M.${escapeHtml(module.module)}</strong>
        <span>${escapeHtml(compact(textBy(module, "title", "titleKo"), 32))}</span>
        <span>${module.count}${t("questions")} · ${t("changed")} ${module.changed}</span>
        <div class="module-progress"><i style="width:${progress}%"></i></div>
      </button>`;
    }),
  ];
  $("moduleNav").innerHTML = items.join("");
  for (const button of document.querySelectorAll(".module-button")) {
    button.addEventListener("click", () => {
      $("moduleFilter").value = button.dataset.module || "";
      applyFilters();
    });
  }
}

function matchesSector(question, sector) {
  if (!sector) return true;
  return question.searchText.includes(sector.toLowerCase());
}

function applyFilters() {
  const query = $("searchInput").value.trim().toLowerCase();
  const moduleValue = $("moduleFilter").value;
  const location = $("locationFilter").value;
  const type = $("typeFilter").value;
  const flag = $("flagFilter").value;
  const sector = $("sectorFilter").value;
  const changedOnly = $("changedOnly").checked;

  state.filtered = state.index.questions.filter((question) => {
    if (query && !question.searchText.includes(query)) return false;
    if (moduleValue && question.module !== moduleValue) return false;
    if (location && question.location !== location) return false;
    if (type && question.questionType !== type) return false;
    if (flag && !question.flags?.[flag]) return false;
    if (changedOnly && !question.isChanged) return false;
    if (!matchesSector(question, sector)) return false;
    return true;
  });

  if (!state.filtered.find((question) => question.code === state.selectedCode)) {
    state.selectedCode = state.filtered[0]?.code || "";
  }

  renderModules();
  renderQuestionList();
  if (state.selectedCode) {
    selectQuestion(state.selectedCode);
  } else {
    $("detailPanel").innerHTML = `<div class="empty-detail"><strong>${t("noResults")}</strong><span>${t("reduceFilters")}</span></div>`;
  }
}

function renderQuestionList() {
  $("resultCount").textContent = `${state.filtered.length}${t("results")}`;
  if (!state.filtered.length) {
    $("questionList").innerHTML = `<div class="empty-list">${t("noResults")}</div>`;
    return;
  }
  $("questionList").innerHTML = state.filtered
    .map((question) => {
      const changedChip = question.isChanged ? chip(t("changedApplied"), "changed") : chip(t("noChangeVerified"), "ok");
      const pointText = `D ${question.daml.D} · A ${question.daml.A} · M ${question.daml.M} · L ${question.daml.L}`;
      const title = textBy(question, "questionText", "questionKo");
      return `<button class="question-row ${state.density === "compact" ? "compact" : ""} ${question.code === state.selectedCode ? "active" : ""}" data-code="${escapeHtml(question.code)}" type="button">
        <div class="question-topline">
          <span class="q-code">M${escapeHtml(question.code)}</span>
          ${changedChip}
        </div>
        <div class="q-title">${escapeHtml(compact(title, state.density === "compact" ? 120 : 210))}</div>
        <div class="q-meta">
          ${chip(locationLabel(question.location), "blue")}
          ${chip(textBy(question, "questionType", "questionTypeKo"))}
          ${chip(pointText, "yellow")}
        </div>
      </button>`;
    })
    .join("");

  for (const row of document.querySelectorAll(".question-row")) {
    row.addEventListener("click", () => selectQuestion(row.dataset.code));
  }
}

async function loadDetail(code) {
  if (state.detailCache.has(code)) return state.detailCache.get(code);
  const question = state.index.questions.find((item) => item.code === code);
  if (!question) return null;
  const response = await fetch(`./data/${question.detailFile}`);
  if (!response.ok) throw new Error(`${code} detail load failed`);
  const detail = await response.json();
  state.detailCache.set(code, detail);
  return detail;
}

async function selectQuestion(code) {
  state.selectedCode = code;
  renderQuestionList();
  $("detailPanel").innerHTML = `<div class="empty-detail"><strong>M${escapeHtml(code)}</strong><span>${t("loadingDetail")}</span></div>`;
  try {
    const detail = await loadDetail(code);
    state.activeSector = chooseInitialSector(detail);
    state.activeLevel = chooseInitialLevel(detail);
    renderDetail(detail);
  } catch (error) {
    $("detailPanel").innerHTML = `<div class="empty-detail"><strong>Detail loading error</strong><span>${escapeHtml(error.message)}</span></div>`;
  }
}

function chooseInitialSector(detail) {
  const sectors = [...new Set([...(detail.points || []), ...(detail.criteria || [])].map((row) => row.sector).filter(Boolean))];
  return sectors.includes("General") ? "General" : sectors[0] || "";
}

function chooseInitialLevel(detail) {
  const levels = [...new Set((detail.criteria || []).map((row) => row.level).filter(Boolean))].sort((a, b) => levelOrder(a) - levelOrder(b));
  return levels[0] || "";
}

function renderDetail(detail) {
  const change = detail.change || {};
  const title = textBy(detail, "questionText", "questionKo");
  const statusText = reviewStatus(change);
  const flagCells = [
    [t("questionName"), change.changed_question],
    [t("responseChanged"), change.changed_response],
    [t("optionsChanged"), change.changed_options],
    [t("guidanceChanged"), change.changed_guidance],
    [t("scoringChanged"), change.changed_scoring],
  ];
  $("detailPanel").innerHTML = `
    <div class="detail-header">
      <div class="detail-kicker">
        <div class="q-meta">
          ${chip(`M${detail.code}`, "blue")}
          ${chip(textBy(detail, "moduleTitle", "moduleTitleKo"))}
          ${chip(textBy(detail, "questionType", "questionTypeKo"))}
          ${chip(statusText, detail.change?.review_status === "변경 반영" ? "changed" : "ok")}
        </div>
        <div class="q-meta">${chip(textBy(change, "change_status", "change_statusKo") || "-", detail.change?.review_status === "변경 반영" ? "changed" : "ok")}</div>
      </div>
      <h2 class="detail-title">${escapeHtml(title)}</h2>
    </div>

    <section class="detail-section">
      <h3>${t("changeStatus")}</h3>
      <div class="status-grid">
        ${flagCells
          .map(
            ([label, active]) => `<div class="status-cell">
              <strong>${escapeHtml(label)}</strong>
              <span>${active ? t("changedYes") : t("changedNo")}</span>
            </div>`,
          )
          .join("")}
      </div>
      ${renderInfoLines([
        [t("changeState"), textBy(change, "change_status", "change_statusKo") || "-"],
        [t("detailChangeType"), textBy(change, "detail_change_types", "detail_change_typesKo") || "-"],
        [t("changeSummary"), textBy(change, "change_summary", "change_summaryKo") || "-"],
        [t("scoringChangeSummary"), textBy(change, "scoring_change_summary", "scoring_change_summaryKo") || "-"],
        [t("reflected"), textBy(change, "reflected", "reflectedKo") || "-"],
      ])}
    </section>

    <section class="detail-section">
      <h3>${t("basicInfo")}</h3>
      <div class="two-col">
        <div>
          ${renderInfoLines([
            [t("reflectionPlace"), textBy(change, "locationEn", "locationKo") || locationLabel(change.location || (detail.module === "7" || detail.module === "12" ? "Excel" : "PPT"))],
            [t("responseType"), textBy(detail, "questionType", "questionTypeKo") || "-"],
            [t("mandatory"), boolKo(detail.mandatory)],
            [t("issue"), textBy(detail, "issueTags", "issueTagsKo") || "-"],
          ])}
        </div>
        <div>
          ${renderInfoLines([
            [t("previousCode"), change.q2025 || "-"],
            [t("previousTitle"), textBy(change, "q2025_text", "q2025_textKo") || "-"],
            [t("sectorTags"), textBy(detail, "sectorTags", "sectorTagsKo") || "-"],
            [t("help"), textBy(detail, "simpleHelp", "simpleHelpKo") || "-"],
          ])}
        </div>
      </div>
    </section>

    <section class="detail-section">
      <h3>${t("responseMethod")}</h3>
      ${renderResponseMethod(detail)}
    </section>

    <section class="detail-section">
      <h3>${t("dropdownOptions")}</h3>
      ${renderDropdowns(detail)}
    </section>

    <section class="detail-section">
      <h3>${t("tableStructure")}</h3>
      ${renderResponseTable(detail)}
    </section>

    <section class="detail-section">
      <h3>${t("pointAllocation")}</h3>
      ${renderPoints(detail)}
    </section>

    <section class="detail-section">
      <h3>${t("scoringCriteria")}</h3>
      ${renderCriteria(detail)}
    </section>

    <section class="detail-section">
      <h3>${t("reportingGuidance")}</h3>
      ${renderGuidance(detail)}
    </section>

    <section class="detail-section">
      <h3>${t("sources")}</h3>
      ${renderSources(detail)}
    </section>
  `;
  bindDetailControls(detail);
}

function renderInfoLines(rows) {
  return rows
    .map(
      ([label, value]) => `<div class="info-line">
        <b>${escapeHtml(label)}</b>
        <div class="info-value">${richText(value || "-")}</div>
      </div>`,
    )
    .join("");
}

function renderResponseMethod(detail) {
  const columns = detail.columns || [];
  return `<p class="text-block muted">${escapeHtml(t("methodIntro"))}</p>
  <div class="method-summary">
    <div><b>${escapeHtml(t("responseType"))}</b><span>${escapeHtml(textBy(detail, "questionType", "questionTypeKo") || "-")}</span></div>
    <div><b>${escapeHtml(t("mandatory"))}</b><span>${escapeHtml(boolKo(detail.mandatory))}</span></div>
    <div><b>${escapeHtml(t("column"))}</b><span>${columns.length}</span></div>
  </div>
  ${
    columns.length
      ? `<div class="table-wrap compact-table">
          <table>
            <thead><tr><th>${t("column")}</th><th>${t("inputType")}</th><th>${t("required")}</th></tr></thead>
            <tbody>
              ${columns
                .map(
                  (column) => `<tr>
                    <td><strong>${escapeHtml(textBy(column, "text", "textKo"))}</strong><br><span class="muted">${escapeHtml(column.code)}</span></td>
                    <td>${escapeHtml(textBy(column, "type", "typeKo"))}</td>
                    <td>${escapeHtml(boolKo(column.mandatory))}</td>
                  </tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </div>`
      : ""
  }`;
}

function renderResponseTable(detail) {
  const rows = detail.rows?.length ? detail.rows : [{ order: 1, title: "Response row", titleKo: "응답 행" }];
  const columns = detail.columns || [];
  if (!columns.length) {
    return `<p class="text-block">${escapeHtml(t("responseType"))}: ${escapeHtml(textBy(detail, "questionType", "questionTypeKo") || "-")}</p>`;
  }
  const visibleRows = rows.slice(0, 12);
  return `<div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th style="min-width:140px">${t("rowItem")}</th>
          ${columns
            .map(
              (column) => `<th style="min-width:190px">
                ${escapeHtml(textBy(column, "text", "textKo"))}
                <br><span class="muted">${escapeHtml(column.code)} · ${escapeHtml(textBy(column, "type", "typeKo"))}</span>
              </th>`,
            )
            .join("")}
        </tr>
      </thead>
      <tbody>
        ${visibleRows
          .map(
            (row) => `<tr>
              <td><strong>${escapeHtml(textBy(row, "title", "titleKo") || "Response row")}</strong></td>
              ${columns
                .map((column) => `<td>${escapeHtml(textBy(column, "type", "typeKo") || "")}</td>`)
                .join("")}
            </tr>`,
          )
          .join("")}
      </tbody>
    </table>
  </div>
  ${
    rows.length > visibleRows.length
      ? `<p class="text-block muted" style="margin-top:8px">${t("fixedRowsPreview")} ${rows.length}${state.lang === "ko" ? "개" : ""} ${t("shownPreview")} ${visibleRows.length}${state.lang === "ko" ? "개" : ""}</p>`
      : ""
  }`;
}

function renderDropdowns(detail) {
  const groups = [];
  if (detail.baseOptions?.length) {
    groups.push({ title: t("questionOptions"), options: detail.baseOptions, optionsKo: detail.baseOptionsKo || [] });
  }
  for (const column of detail.columns || []) {
    if (column.options?.length) {
      groups.push({
        title: `${column.code} · ${textBy(column, "text", "textKo")}`,
        options: column.options,
        optionsKo: column.optionsKo || [],
      });
    }
  }
  if (!groups.length) return `<p class="text-block muted">${t("noDropdown")}</p>`;
  return groups
    .map((group) => {
      const options = state.lang === "ko" ? group.optionsKo?.length ? group.optionsKo : group.options : group.options;
      return `<div class="option-group">
        <h4>${escapeHtml(displayText(group.title))}</h4>
        <ul>
          ${options
            .map((option) => `<li><span>${escapeHtml(displayText(option))}</span></li>`)
            .join("")}
        </ul>
      </div>`;
    })
    .join("");
}

function renderPoints(detail) {
  if (!detail.points?.length) return `<p class="text-block muted">${t("noPoints")}</p>`;
  const sectors = [...new Set(detail.points.map((row) => row.sector))];
  const active = state.activeSector || sectors[0];
  const rows = detail.points.filter((row) => row.sector === active);
  return `<div class="detail-tools">
    <select id="pointSectorSelect" aria-label="point sector">
      ${sectors
        .map((sector) => {
          const row = detail.points.find((item) => item.sector === sector);
          const label = state.lang === "ko" ? row?.sectorKo || sectorLabel(sector) : sector;
          return `<option value="${escapeHtml(sector)}" ${sector === active ? "selected" : ""}>${escapeHtml(label)}</option>`;
        })
        .join("")}
    </select>
  </div>
  <div class="table-wrap">
    <table>
      <thead><tr><th>${t("sector")}</th><th>D</th><th>A</th><th>M</th><th>L</th></tr></thead>
      <tbody>
        ${rows
          .map((row) => `<tr><td>${escapeHtml(textBy(row, "sector", "sectorKo"))}</td><td>${escapeHtml(row.D)}</td><td>${escapeHtml(row.A)}</td><td>${escapeHtml(row.M)}</td><td>${escapeHtml(row.L)}</td></tr>`)
          .join("")}
      </tbody>
    </table>
  </div>`;
}

function renderCriteria(detail) {
  if (!detail.criteria?.length) return `<p class="text-block muted">${t("noCriteria")}</p>`;
  const sectors = [...new Set(detail.criteria.map((row) => row.sector))];
  const levels = [...new Set(detail.criteria.map((row) => row.level))].sort((a, b) => levelOrder(a) - levelOrder(b));
  const activeSector = state.activeSector || sectors[0];
  const activeLevel = state.activeLevel || levels[0];
  const rows = detail.criteria.filter((row) => row.sector === activeSector && row.level === activeLevel);
  return `<div class="detail-tools">
    <select id="criteriaSectorSelect" aria-label="criteria sector">
      ${sectors
        .map((sector) => {
          const row = detail.criteria.find((item) => item.sector === sector);
          const label = state.lang === "ko" ? row?.sectorKo || sectorLabel(sector) : sector;
          return `<option value="${escapeHtml(sector)}" ${sector === activeSector ? "selected" : ""}>${escapeHtml(label)}</option>`;
        })
        .join("")}
    </select>
    <div class="level-tabs">
      ${levels.map((level) => `<button class="level-button ${level === activeLevel ? "active" : ""}" data-level="${escapeHtml(level)}" type="button">${escapeHtml(level)}</button>`).join("")}
    </div>
  </div>
  ${
    rows.length
      ? rows
          .map(
            (row) => `<article class="criteria-card">
              <h4>${escapeHtml(textBy(row, "sector", "sectorKo"))} · ${escapeHtml(row.level)}</h4>
              <div class="text-block">${richText(textBy(row, "criteria", "criteriaKo"))}</div>
            </article>`,
          )
          .join("")
      : `<p class="text-block muted">${t("noCriteriaSelection")}</p>`
  }`;
}

function renderGuidance(detail) {
  if (!detail.guidance?.length) return `<p class="text-block muted">${t("noGuidance")}</p>`;
  return detail.guidance
    .map(
      (block) => `<article class="guidance-block">
        <h4>${escapeHtml(textBy(block, "type", "typeKo") || "Guidance")}</h4>
        <div class="text-block">${richText(textBy(block, "text", "textKo"))}</div>
      </article>`,
    )
    .join("");
}

function renderSources(detail) {
  return (detail.sourceInfo || [])
    .map(
      (source) => `<div class="info-line">
        <b>${escapeHtml(textBy(source, "name", "nameKo"))}</b>
        <span>${escapeHtml(textBy(source, "version", "versionKo"))}</span>
      </div>`,
    )
    .join("");
}

function bindDetailControls(detail) {
  const pointSector = $("pointSectorSelect");
  if (pointSector) {
    pointSector.addEventListener("change", () => {
      state.activeSector = pointSector.value;
      renderDetail(detail);
    });
  }
  const criteriaSector = $("criteriaSectorSelect");
  if (criteriaSector) {
    criteriaSector.addEventListener("change", () => {
      state.activeSector = criteriaSector.value;
      renderDetail(detail);
    });
  }
  for (const button of document.querySelectorAll(".level-button")) {
    button.addEventListener("click", () => {
      state.activeLevel = button.dataset.level;
      renderDetail(detail);
    });
  }
}

function bindEvents() {
  const filterIds = ["searchInput", "moduleFilter", "locationFilter", "typeFilter", "flagFilter", "sectorFilter", "changedOnly"];
  for (const id of filterIds) {
    const element = $(id);
    element.addEventListener(id === "searchInput" ? "input" : "change", applyFilters);
  }
  $("resetButton").addEventListener("click", () => {
    $("searchInput").value = "";
    $("moduleFilter").value = "";
    $("locationFilter").value = "";
    $("typeFilter").value = "";
    $("flagFilter").value = "";
    $("sectorFilter").value = "";
    $("changedOnly").checked = false;
    applyFilters();
  });
  for (const button of document.querySelectorAll(".seg")) {
    button.addEventListener("click", () => {
      state.density = button.dataset.density;
      for (const item of document.querySelectorAll(".seg")) item.classList.toggle("active", item === button);
      renderQuestionList();
    });
  }
  for (const button of document.querySelectorAll(".lang-button")) {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set("lang", state.lang);
      window.history.replaceState({}, "", nextUrl);
      updateStaticLabels();
      populateFilters();
      renderMetrics();
      renderModules();
      renderQuestionList();
      if (state.selectedCode) {
        loadDetail(state.selectedCode).then(renderDetail);
      }
    });
  }
}

async function init() {
  try {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang === "en" || urlLang === "ko") state.lang = urlLang;
    await loadIndex();
    updateStaticLabels();
    populateFilters();
    renderMetrics();
    renderModules();
    bindEvents();
    applyFilters();
  } catch (error) {
    document.body.innerHTML = `<main class="app-shell"><div class="empty-detail"><strong>App loading error</strong><span>${escapeHtml(error.message)}</span></div></main>`;
  }
}

init();
