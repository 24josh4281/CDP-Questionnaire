const state = {
  index: null,
  filtered: [],
  selectedCode: "",
  detailCache: new Map(),
  density: "comfortable",
  activeLevel: "",
  activeSector: "",
  lang: "ko",
  favorites: new Set(),
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
    favoritesOnly: "즐겨찾기만 보기",
    questionList: "문항 목록",
    exportCsv: "필터 결과 CSV",
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
    copyLink: "공유 링크",
    copied: "복사됨",
    copyViewLink: "필터 링크",
    viewLinkCopied: "필터 링크 복사됨",
    addFavorite: "즐겨찾기 추가",
    removeFavorite: "즐겨찾기 해제",
    favoriteChip: "즐겨찾기",
    sectionJump: "상세 바로가기",
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
    favoritesOnly: "Show favorites only",
    questionList: "Question list",
    exportCsv: "Export CSV",
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
    copyLink: "Copy link",
    copied: "Copied",
    copyViewLink: "Copy view",
    viewLinkCopied: "View copied",
    addFavorite: "Add favorite",
    removeFavorite: "Remove favorite",
    favoriteChip: "Favorite",
    sectionJump: "Jump to section",
    sector: "Sector",
    level: "Level",
    route: "Route",
  },
};

const PUBLIC_BASE_URL = "https://24josh4281.github.io/CDP-Questionnaire/";
const URL_STATE_VERSION = "favorites-v6";
const FAVORITES_STORAGE_KEY = "cdpQuestionDbFavorites";

const SECTOR_KO = {
  General: "일반",
  "Agricultural commodities": "농산물 원자재",
  Aviation: "항공",
  "Biodiversity - Mines": "생물다양성 - 광산",
  "Capital goods": "자본재",
  Cement: "시멘트",
  Chemicals: "화학",
  Coal: "석탄",
  Construction: "건설",
  "Energy utilities & power generators": "에너지 유틸리티 및 발전",
  "Financial services": "금융 서비스",
  Food: "식음료 및 담배",
  "beverage & tobacco": "식음료 및 담배",
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

function qaLog(level, message, data = {}) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    service: "cdp-question-db",
    request_id: `qa_${Date.now().toString(36)}`,
    message,
    data,
  };
  console.log(JSON.stringify(entry));
}

function loadFavorites() {
  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    const values = raw ? JSON.parse(raw) : [];
    state.favorites = new Set(Array.isArray(values) ? values : []);
    qaLog("INFO", "Favorites loaded", { count: state.favorites.size });
  } catch (error) {
    state.favorites = new Set();
    qaLog("WARNING", "Favorites load failed", { error: error.message });
  }
}

function saveFavorites() {
  try {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([...state.favorites].sort(compareCode)));
    qaLog("INFO", "Favorites saved", { count: state.favorites.size });
  } catch (error) {
    qaLog("ERROR", "Favorites save failed", { error: error.message });
  }
}

const KO_DISPLAY_REPLACEMENTS = [
  [/We measure the impact of our 포트폴리오 on the climate/gi, "포트폴리오가 기후에 미치는 영향을 측정함"],
  [/We measure the impact of our 포트폴리오 on 수자원/gi, "포트폴리오가 수자원에 미치는 영향을 측정함"],
  [/Explain why 귀사 does not measure its 포트폴리오 영향 on 기후변화/gi, "포트폴리오의 기후 영향 측정하지 않는 이유 설명"],
  [/Explain why 귀사 does not measure its 포트폴리오 영향 on 수자원/gi, "포트폴리오의 수자원 영향 측정하지 않는 이유 설명"],
  [/Disclosure metric/gi, "공시 지표"],
  [/Primary reason for not measuring 포트폴리오 영향 on climate/gi, "포트폴리오의 기후 영향을 측정하지 않는 주된 이유"],
  [/Primary reason for not measuring 포트폴리오 영향 on 수자원/gi, "포트폴리오의 수자원 영향을 측정하지 않는 주된 이유"],
  [/Asset classes covered(?: in the)? calculation/gi, "산정 대상 자산군"],
  [/% of undrawn loan commitments included in the financed emissions calculation/gi, "금융배출량 산정에 포함된 미사용 대출약정 비율"],
  [/Please explain the details of and assumptions used in 귀사의 calculation/gi, "산정 세부 내용 및 적용 가정 설명"],
  [/Financed emissions \(metric unit tons CO2e\) in the reporting year/gi, "보고연도 금융배출량(metric tons CO2e)"],
  [/Financed emissions \(metric unit tons CO2e\) in the base year/gi, "기준연도 금융배출량(metric tons CO2e)"],
  [/% of portfolio covered in relation to total portfolio value/gi, "총 포트폴리오 가치 대비 산정 대상 포트폴리오 비율"],
  [/Total value of assets included in the financed emissions calculation/gi, "금융배출량 산정에 포함된 총 자산 가치"],
  [/% of financed emissions calculated using data obtained from clients\/investees \(optional\)/gi, "고객/피투자자 제공 데이터로 산정한 금융배출량 비율(선택)"],
  [/Emissions calculation methodology/gi, "배출량 산정 방법론"],
  [/Weighted data quality score \(for PCAF-aligned data quality scores only\)/gi, "가중 데이터 품질 점수(PCAF 데이터 품질 점수에 한함)"],
  [/Base year end/gi, "기준연도 종료일"],
  [/End Date/gi, "종료일자"],
  [/Portfolio metric/gi, "포트폴리오 지표"],
  [/Metric value in the reporting year/gi, "보고연도 지표값"],
  [/Total value of assets included in the calculation/gi, "산정에 포함된 총 자산 가치"],
  [/% of emissions calculated using data obtained from clients\/investees/gi, "고객/피투자자 제공 데이터로 산정한 배출량 비율"],
  [/Please explain the details and key assumptions used in 귀사의 assessment/gi, "평가 세부 내용 및 주요 가정 설명"],
  [/Portfolio breakdown/gi, "포트폴리오 세분화"],
  [/Please explain why you do not provide a breakdown of 귀사의 포트폴리오 영향 on the climate/gi, "포트폴리오의 기후 영향 세분화 정보를 제공하지 않는 이유 설명"],
  [/Value of assets covered in the calculation based on outstanding loan amounts/gi, "미상환 대출잔액 기준 산정 대상 자산 가치"],
  [/Value of assets covered in the calculation including undrawn loan commitments/gi, "미사용 대출약정을 포함한 산정 대상 자산 가치"],
  [/Explain the details, assumptions and exclusions in 귀사의 calculation/gi, "산정 세부 내용, 가정 및 제외사항 설명"],
  [/Industry sectors 귀사 lends to, invests in, and\/or insures/gi, "대출, 투자 및/또는 보험을 제공하는 산업 부문"],
  [/Reporting the 포트폴리오 value 및 % of revenue associated with the 포트폴리오/gi, "포트폴리오 가치 및 포트폴리오 관련 매출 비율 보고 여부"],
  [/Portfolio value based on total assets/gi, "총자산 기준 포트폴리오 가치"],
  [/Type of clients/gi, "고객 유형"],
  [/Relevance of 배출량 및\/또는 수자원 관련 임팩트/gi, "배출량 및/또는 수자원 관련 임팩트의 관련성"],
  [/Primary reason 배출량 및\/또는 수자원 관련 임팩트 from this activity are not relevant/gi, "해당 활동의 배출량 및/또는 수자원 관련 임팩트가 관련 없다고 판단한 주된 이유"],
  [/Explain why 배출량 및\/또는 수자원 관련 임팩트 from this activity are not relevant/gi, "해당 활동의 배출량 및/또는 수자원 관련 임팩트가 관련 없는 이유 설명"],
  [/Own 또는 control operations use this power generation source/gi, "해당 발전원을 사용하는 소유 또는 통제 운영사업장"],
  [/Nameplate capacity \(MW\)/gi, "설비용량(MW)"],
  [/Gross 전력 generation \(GWh\)/gi, "총 전력 생산량(GWh)"],
  [/Net 전력 generation \(GWh\)/gi, "순 전력 생산량(GWh)"],
  [/Produced 및\/또는 sourced/gi, "생산 및/또는 조달"],
  [/% of revenue dependent on this agricultural commodity/gi, "해당 농산물 원자재에 의존하는 매출 비율"],
  [/Is this commodity considered significant to 귀사의 business in terms of revenue\?/gi, "해당 원자재가 매출 기준으로 귀사의 사업에 중요합니까?"],
  [/Value chain mapped/gi, "가치사슬 매핑 여부"],
  [/Value chain stages covered in mapping/gi, "매핑에 포함된 가치사슬 단계"],
  [/Highest supplier tier mapped/gi, "매핑한 최상위 공급업체 단계"],
  [/Highest supplier tier known but not mapped/gi, "파악했으나 매핑하지 않은 최상위 공급업체 단계"],
  [/Portfolios covered in mapping/gi, "매핑에 포함된 포트폴리오"],
  [/Description of mapping process and coverage/gi, "매핑 프로세스 및 적용 범위 설명"],
  [/Primary reason for not mapping 귀사의 업스트림 가치사슬 또는 any 가치사슬 stages/gi, "업스트림 가치사슬 또는 가치사슬 단계를 매핑하지 않은 주된 이유"],
  [/Explain why 귀사 has not mapped its 업스트림 가치사슬 또는 any 가치사슬 stages/gi, "업스트림 가치사슬 또는 가치사슬 단계를 매핑하지 않은 이유 설명"],
  [/Type of financial institution/gi, "금융기관 유형"],
  [/Organization type/gi, "조직 유형"],
  [/Description of organization/gi, "조직 설명"],
  [/End date of 보고연도/gi, "보고연도 종료일"],
  [/Alignment of this reporting period with 귀사의 financial reporting period/gi, "보고기간과 재무보고기간의 일치 여부"],
  [/Indicate if you are providing 배출량 data for past 보고연도s/gi, "과거 보고연도 배출량 데이터 제공 여부"],
  [/Number of past reporting years you will be providing Scope 1 배출량 data for/gi, "Scope 1 배출량 데이터를 제공할 과거 보고연도 수"],
  [/Number of past reporting years you will be providing Scope 2 배출량 data for/gi, "Scope 2 배출량 데이터를 제공할 과거 보고연도 수"],
  [/Number of past reporting years you will be providing Scope 3 배출량 data for/gi, "Scope 3 배출량 데이터를 제공할 과거 보고연도 수"],
  [/Is 귀사의 reporting boundary for 귀사의 CDP disclosure the same as that used in 귀사의 financial statements\?/gi, "CDP 공시 보고경계가 재무제표 보고경계와 동일합니까?"],
  [/How does 귀사의 reporting boundary differ to that used in 귀사의 financial statement\?/gi, "CDP 보고경계가 재무제표 보고경계와 어떻게 다릅니까?"],
  [/귀사는 use this unique identifier\?/gi, "귀사는 이 고유 식별자를 사용합니까?"],
  [/Provide 귀사의 unique identifier/gi, "귀사의 고유 식별자를 입력하십시오"],
  [/Is this process informed by the dependencies and\/or impacts process\?/gi, "이 프로세스가 의존성 및/또는 임팩트 프로세스의 정보를 반영합니까?"],
  [/Integration of risk management process/gi, "리스크 관리 프로세스와의 통합"],
  [/Location-specificity used/gi, "사용한 위치 특수성"],
  [/Tools 및 methods used/gi, "사용한 도구 및 방법"],
  [/Have you validated 귀사의 process for SBTN Step 1 ‘Assess'\?/gi, "SBTN 1단계 '평가'에 대해 프로세스를 검증받았습니까?"],
  [/SBTN Step 1 ‘Assess' official validation letter/gi, "SBTN 1단계 '평가' 공식 검증서"],
  [/Risk types 및 criteria considered/gi, "고려한 리스크 유형 및 기준"],
  [/Partners 및 stakeholders considered/gi, "고려한 파트너 및 이해관계자"],
  [/Has this process changed since the previous 보고연도\?/gi, "전 보고연도 이후 이 프로세스가 변경되었습니까?"],
  [/Further details of process/gi, "프로세스 추가 세부 정보"],
  [/Value chain stages covered/gi, "포함된 가치사슬 단계"],
  [/Coverage/gi, "적용 범위"],
  [/Primary reason/gi, "주된 이유"],
  [/Disclosure/gi, "공시"],
  [/metric/gi, "지표"],
  [/calculation/gi, "산정"],
  [/methodology/gi, "방법론"],
  [/Asset class(?:es)?/gi, "자산군"],
  [/covered/gi, "포함"],
  [/included/gi, "포함된"],
  [/Financed emissions/gi, "금융배출량"],
  [/financed/gi, "금융"],
  [/base year/gi, "기준연도"],
  [/breakdown/gi, "세분화"],
  [/Industry/gi, "산업"],
  [/financial institution/gi, "금융기관"],
  [/reporting boundary/gi, "보고경계"],
  [/unique identifier/gi, "고유 식별자"],
  [/process/gi, "프로세스"],
  [/impact/gi, "영향"],
  [/climate/gi, "기후"],
  [/water/gi, "수자원"],
  [/No, 그러나 당사 계획 그렇게 향후 2개 연도/gi, "아니요, 하지만 향후 2년 내에 진행할 계획입니다"],
  [/No, 및 당사 아님 계획 그렇게 향후 2개 연도/gi, "아니요, 향후 2년 내에 진행할 계획이 없습니다"],
  [/No, but we plan to do so next two years/gi, "아니요, 하지만 향후 2년 내에 진행할 계획입니다"],
  [/No, and we do not plan to do so next two years/gi, "아니요, 향후 2년 내에 진행할 계획이 없습니다"],
  [/기타 탄소 footprinting 및\/또는 노출 지표s \(as defined 별 TCFD\)/gi, "기타 탄소발자국 및/또는 노출 지표(TCFD 정의)"],
  [/Lack internal resources, capabilities, 또는 expertise \(e\.g\., 때문에 조직 size\)/gi, "내부 자원, 역량 또는 전문성 부족(예: 조직 규모로 인해)"],
  [/Lack of internal resources, capabilities, 또는 expertise \(e\.g\., due to 조직 size\)/gi, "내부 자원, 역량 또는 전문성 부족(예: 조직 규모로 인해)"],
  [/No standardized procedure/gi, "표준화된 절차 없음"],
  [/아님 an immediate strategic priority/gi, "즉각적인 전략 우선순위가 아님"],
  [/Not an immediate strategic priority/gi, "즉각적인 전략 우선순위가 아님"],
  [/Lack tools 또는 methodologies available/gi, "활용 가능한 도구 또는 방법론 부족"],
  [/Lack of tools 또는 methodologies available/gi, "활용 가능한 도구 또는 방법론 부족"],
  [/Judged unimportant 또는 아님 relevant/gi, "중요하지 않거나 관련성이 낮다고 판단"],
  [/Judged to be unimportant 또는 not relevant/gi, "중요하지 않거나 관련성이 낮다고 판단"],
  [/설명하십시오: 왜 귀사 아님 측정 그것의 포트폴리오 영향 수자원/gi, "포트폴리오의 수자원 영향을 측정하지 않는 이유 설명"],
  [/설명하십시오: 왜 귀사 아님 측정 그것의 포트폴리오 영향 기후/gi, "포트폴리오의 기후 영향을 측정하지 않는 이유 설명"],
  [/주된 이유 에 대한 아님 측정 포트폴리오 영향 수자원/gi, "포트폴리오의 수자원 영향을 측정하지 않는 주된 이유"],
  [/주된 이유 에 대한 아님 측정 포트폴리오 영향 기후/gi, "포트폴리오의 기후 영향을 측정하지 않는 주된 이유"],
  [/금융기관s'?/gi, "금융기관"],
  [/데이터 users/gi, "데이터 사용자"],
  [/지표s/gi, "지표"],
  [/대부분의 금융기관 영향 환경 발생합니다 그들의 포트폴리오, 내 재무 제품 및 서비스 그들은 입력하십시오: 및\/또는 그들의 투자 해당 가능하게 합니다 활동 영향 환경\./gi, "대부분의 금융기관은 금융상품, 서비스 및 투자 활동을 통해 포트폴리오에서 환경 영향을 발생시킵니다."],
  [/조직 이 섹터 해야 합니다 측정 그들의 포트폴리오 영향 사용하여 구체적인 지표 이해 영향 그들의 재무 활동 환경 및 적절히 관리\./gi, "이 부문의 조직은 구체적인 지표를 사용해 포트폴리오의 환경 영향을 측정하고, 금융활동이 환경에 미치는 영향을 이해하여 적절히 관리해야 합니다."],
  [/이 문항 알려줍니다 투자자 및 기타 데이터 사용자 관련 정도 조직 이해 그들의 포트폴리오' 환경 영향\./gi, "이 문항은 투자자와 기타 데이터 사용자가 조직이 포트폴리오의 환경 영향을 어느 정도 이해하고 있는지 파악하는 데 도움을 줍니다."],
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
  [/countries\/areas/gi, "국가/지역"],
  [/country\/area names/gi, "국가/지역명"],
  [/country\/area/gi, "국가/지역"],
  [/minor edits/gi, "경미한 수정"],
  [/minor edit/gi, "경미한 수정"],
  [/set quantitative/g, "정량 양식"],
  [/set qualitative/g, "정성 양식"],
  [/D\/A\/M\/L/g, "D/A/M/L"],
  [/the following/gi, "다음"],
  [/following/gi, "다음"],
  [/details on/gi, "세부 정보:"],
  [/details of/gi, "세부 정보:"],
  [/\bdetails\b/gi, "세부 정보"],
  [/changed to/gi, "다음으로 변경됨:"],
  [/changed from/gi, "다음에서 변경됨:"],
  [/\bchanged\b/gi, "변경됨"],
  [/\badded\b/gi, "추가됨"],
  [/\bremoved\b/gi, "삭제됨"],
  [/\bdeleted\b/gi, "삭제됨"],
  [/\bupdated\b/gi, "업데이트됨"],
  [/\bclarify\b/gi, "명확히 하기 위해"],
  [/\bconsistent\b/gi, "일관되게"],
  [/\bconditional logic\b/gi, "조건부 표시 로직"],
  [/\bdependency\b/gi, "의존성"],
  [/\bdependencies\b/gi, "의존성"],
  [/\bimpacts\b/gi, "임팩트"],
  [/\bimpact\b/gi, "영향"],
  [/\brisk\b/gi, "리스크"],
  [/\brisks\b/gi, "리스크"],
  [/\bopportunity\b/gi, "기회"],
  [/\bopportunities\b/gi, "기회"],
  [/\bassessment\b/gi, "평가"],
  [/\bassess\b/gi, "평가"],
  [/\bassesses\b/gi, "평가합니다"],
  [/\bidentified\b/gi, "식별된"],
  [/\bidentifies\b/gi, "식별합니다"],
  [/\bidentify\b/gi, "식별"],
  [/\bcovered\b/gi, "포함된"],
  [/\bcover\b/gi, "포함"],
  [/\bheader\b/gi, "헤더"],
  [/\bregion\b/gi, "지역"],
  [/\blocations\b/gi, "위치/지역"],
  [/\blocation\b/gi, "위치/지역"],
  [/\bindustries\b/gi, "산업"],
  [/\bindustry\b/gi, "산업"],
  [/\bexposed\b/gi, "노출된"],
  [/\bcontributing\b/gi, "기여하는"],
  [/exclusion policies/gi, "제외 정책"],
  [/exclusion policy/gi, "제외 정책"],
  [/\bexclusion\b/gi, "제외"],
  [/\bpolicies\b/gi, "정책"],
  [/\bcommitments\b/gi, "공약"],
  [/\bcommitment\b/gi, "공약"],
  [/\bsignatory\b/gi, "서명기관"],
  [/\bframework\b/gi, "프레임워크"],
  [/\bcollaborative\b/gi, "협력"],
  [/\bscience-based\b/gi, "과학기반"],
  [/\bportfolio impact\b/gi, "포트폴리오 영향"],
  [/\bportfolio\b/gi, "포트폴리오"],
  [/\bfinanced emissions\b/gi, "금융배출량"],
  [/\bemissions intensity\b/gi, "배출집약도"],
  [/\bemission intensity\b/gi, "배출집약도"],
  [/\bemissions\b/gi, "배출량"],
  [/\bemission\b/gi, "배출"],
  [/\bcarbon\b/gi, "탄소"],
  [/\benergy intensities\b/gi, "에너지 집약도"],
  [/\benergy intensity\b/gi, "에너지 집약도"],
  [/\benergy\b/gi, "에너지"],
  [/\belectricity\b/gi, "전력"],
  [/\bheat\b/gi, "열"],
  [/\bsteam\b/gi, "스팀"],
  [/\bcooling\b/gi, "냉방"],
  [/\bpurchases\b/gi, "구매량"],
  [/\bpurchased\b/gi, "구매한"],
  [/\bpurchase\b/gi, "구매"],
  [/\bgenerated\b/gi, "생산한"],
  [/\bconsumed\b/gi, "소비한"],
  [/\bgenerated 및 consumed\b/gi, "생산 및 소비한"],
  [/\bproduced\b/gi, "생산한"],
  [/\bproduce\b/gi, "생산"],
  [/\btotals\b/gi, "총량"],
  [/\btotal\b/gi, "총"],
  [/\bexcluding\b/gi, "제외"],
  [/\bincluding\b/gi, "포함"],
  [/\bguidance\b/gi, "가이던스"],
  [/\bmetric\b/gi, "지표"],
  [/\bmetrics\b/gi, "지표"],
  [/\bpercentage\b/gi, "비율"],
  [/\bmass\b/gi, "질량"],
  [/\bprimary resource\b/gi, "1차 자원"],
  [/\bfeedstock\b/gi, "원료"],
  [/\bfeedstocks\b/gi, "원료"],
  [/\bchemical products\b/gi, "화학 제품"],
  [/\bchemical\b/gi, "화학"],
  [/\bsteel-related\b/gi, "철강 관련"],
  [/\bsteel plant\b/gi, "제철소"],
  [/\bsteel\b/gi, "철강"],
  [/\bcapacity figures\b/gi, "용량 수치"],
  [/\bcapacity\b/gi, "용량"],
  [/\bprocess route\b/gi, "공정 경로"],
  [/\broute\b/gi, "경로"],
  [/\blife cycle emissions\b/gi, "전과정 배출량"],
  [/\blife cycle\b/gi, "전과정"],
  [/\bnet zero carbon buildings\b/gi, "넷제로 탄소 건물"],
  [/\bnet zero carbon\b/gi, "넷제로 탄소"],
  [/\bzero carbon\b/gi, "제로 탄소"],
  [/\bmajor renovations\b/gi, "주요 개보수"],
  [/\bmajor renovation\b/gi, "주요 개보수"],
  [/\bnew construction\b/gi, "신축"],
  [/\bprojects\b/gi, "프로젝트"],
  [/\bproject\b/gi, "프로젝트"],
  [/\bcompleted\b/gi, "완료된"],
  [/\bdesigned\b/gi, "설계된"],
  [/\bunder management\b/gi, "관리 중인"],
  [/\bmanagement\b/gi, "관리"],
  [/\bestimated\b/gi, "추정"],
  [/\bnet reserves\b/gi, "순 매장량"],
  [/\breserves\b/gi, "매장량"],
  [/\bresource base\b/gi, "자원 기반"],
  [/\bmillion boe\b/gi, "백만 boe"],
  [/\bsubsidiaries\b/gi, "자회사"],
  [/\bsubsidiary\b/gi, "자회사"],
  [/\bequity-accounted entities\b/gi, "지분법 적용 기업"],
  [/\bassociated\b/gi, "관련"],
  [/\battributable\b/gi, "귀속되는"],
  [/\bfossil fuels\b/gi, "화석연료"],
  [/\bfossil fuel\b/gi, "화석연료"],
  [/\breserves type\b/gi, "매장량 유형"],
  [/\bdevelopment types\b/gi, "개발 유형"],
  [/\bindicative\b/gi, "예시적"],
  [/\bsplit\b/gi, "분할"],
  [/\btransmission 및 유통 business\b/gi, "송배전 사업"],
  [/\btransmission and distribution business\b/gi, "송배전 사업"],
  [/\btransmission\b/gi, "송전"],
  [/\bdistribution business\b/gi, "배전 사업"],
  [/\bdistribution\b/gi, "배전"],
  [/\bbusiness\b/gi, "사업"],
  [/\bvalue\b/gi, "가치"],
  [/\bfinancial\b/gi, "재무"],
  [/\binvestment\b/gi, "투자"],
  [/\binvestments\b/gi, "투자"],
  [/\bcosts\b/gi, "비용"],
  [/\bcost\b/gi, "비용"],
  [/\bfigure\b/gi, "수치"],
  [/\bfigures\b/gi, "수치"],
  [/\bcategory\b/gi, "카테고리"],
  [/\bcategories\b/gi, "카테고리"],
  [/\bsector\b/gi, "섹터"],
  [/\bsectors\b/gi, "섹터"],
  [/\blevel\b/gi, "수준"],
  [/\blevels\b/gi, "수준"],
  [/\bperformance\b/gi, "성과"],
  [/\bprotocol\b/gi, "프로토콜"],
  [/\bstandard\b/gi, "기준"],
  [/\bstandards\b/gi, "기준"],
  [/\bcertification\b/gi, "인증"],
  [/\btrading scheme\b/gi, "거래제"],
  [/\bguidelines\b/gi, "지침"],
  [/\breporting\b/gi, "보고"],
  [/\bcertification\b/gi, "인증"],
  [/\bremovals\b/gi, "제거"],
  [/\bremoval\b/gi, "제거"],
  [/\ballow\b/gi, "허용"],
  [/\ballowance\b/gi, "허용량"],
  [/\bcharacters\b/gi, "문자"],
  [/\bcharacter\b/gi, "문자"],
  [/\bactions\b/gi, "조치"],
  [/\baction\b/gi, "조치"],
  [/\breduce\b/gi, "감축"],
  [/\breduction\b/gi, "감축"],
  [/\bunderstand\b/gi, "이해"],
  [/\bunderstanding\b/gi, "이해"],
  [/\brecommendations\b/gi, "권고사항"],
  [/\brecommendation\b/gi, "권고사항"],
  [/\bappropriate\b/gi, "적절한"],
  [/\befficiency\b/gi, "효율"],
  [/\bproduct\b/gi, "제품"],
  [/\bservice\b/gi, "서비스"],
  [/\bwhich\b/gi, ""],
  [/\bthat\b/gi, "해당"],
  [/\bthis\b/gi, "이"],
  [/\bthese\b/gi, "이러한"],
  [/\bthose\b/gi, "해당"],
  [/\bthere\b/gi, ""],
  [/\bwhat\b/gi, "무엇"],
  [/\bhow\b/gi, "어떻게"],
  [/\bwhen\b/gi, "언제"],
  [/\bwhy\b/gi, "왜"],
  [/\bwho\b/gi, "누가"],
  [/\bare\b/gi, ""],
  [/\bis\b/gi, ""],
  [/\bwas\b/gi, ""],
  [/\bwere\b/gi, ""],
  [/\bbe\b/gi, ""],
  [/\bbeen\b/gi, ""],
  [/\bbeing\b/gi, ""],
  [/\bhas\b/gi, ""],
  [/\bhave\b/gi, ""],
  [/\bhad\b/gi, ""],
  [/\bdoes\b/gi, ""],
  [/\bdo\b/gi, ""],
  [/\bdid\b/gi, ""],
  [/\bwill\b/gi, ""],
  [/\bwould\b/gi, ""],
  [/\bshould\b/gi, "해야 합니다"],
  [/\bmust\b/gi, "해야 합니다"],
  [/\bmay\b/gi, "할 수 있습니다"],
  [/\bcan\b/gi, "할 수 있습니다"],
  [/\bany\b/gi, "모든"],
  [/\beach\b/gi, "각"],
  [/\bper\b/gi, "당"],
  [/\bto\b/gi, ""],
  [/\bof\b/gi, ""],
  [/\bin\b/gi, ""],
  [/\bon\b/gi, ""],
  [/\bat\b/gi, ""],
  [/\bby\b/gi, "별"],
  [/\bup\b/gi, ""],
  [/\bused\b/gi, "사용된"],
  [/\busing\b/gi, "사용하여"],
  [/\buse\b/gi, "사용"],
  [/\bthe\b/gi, ""],
  [/\bseveral\b/gi, "몇 가지"],
  [/several 경미한 수정/gi, "몇 가지 경미한 수정"],
  [/helps 데이터 사용자 interpret/gi, "데이터 사용자가 이해하는 데 도움을 줍니다"],
  [/\bhelps\b/gi, "도움이 됩니다"],
  [/\binterpret\b/gi, "해석"],
  [/\bresponses\b/gi, "응답"],
  [/\bresponse\b/gi, "응답"],
  [/\brelate\b/gi, "관련됩니다"],
  [/\brelates\b/gi, "관련됩니다"],
  [/\boperations\b/gi, "운영"],
  [/\boperation\b/gi, "운영"],
  [/\boperate\b/gi, "운영"],
  [/\byou operate\b/gi, "귀사가 운영하는"],
  [/\belement\b/gi, "요소"],
  [/\bnegative screening\b/gi, "네거티브 스크리닝"],
  [/\bscreening\b/gi, "스크리닝"],
  [/\bprocesses\b/gi, "프로세스"],
  [/\bresponders\b/gi, "응답 기업"],
  [/\bresponder\b/gi, "응답 기업"],
  [/\brather 보다\b/gi, "보다"],
  [/\brather than\b/gi, "보다"],
  [/\bnow\b/gi, "이제"],
  [/\bdue\b/gi, "때문에"],
  [/\bupdates\b/gi, "업데이트"],
  [/\bupdate\b/gi, "업데이트"],
  [/\breflect\b/gi, "반영"],
  [/\bNone\b/g, "없음"],
  [/Deep sea mining/gi, "심해 채굴"],
  [/Greenhouse Gas Protocol/gi, "온실가스 프로토콜"],
  [/The Greenhouse Gas Protocol/gi, "온실가스 프로토콜"],
  [/Land Sector and Removals Guidance/gi, "토지 부문 및 제거 가이던스"],
  [/Korea Guidelines for Reporting and Certification of Emissions in the Trading Scheme/gi, "한국 배출권거래제 배출량 보고 및 인증 지침"],
  [/\bGuidelines\b/gi, "지침"],
  [/\bCertification\b/gi, "인증"],
  [/\bScheme\b/gi, "제도"],
  [/\bTrading\b/gi, "거래"],
  [/\bGas\b/g, "가스"],
  [/\bProtocol\b/g, "프로토콜"],
  [/\byou\b/gi, "귀사"],
  [/\bnot\b/gi, "아님"],
  [/\benvironmental\b/gi, "환경"],
  [/\bissue\b/gi, "이슈"],
  [/\bissues\b/gi, "이슈"],
  [/\barea\b/gi, "지역"],
  [/\bareas\b/gi, "지역"],
  [/\byear\b/gi, "연도"],
  [/\byears\b/gi, "연도"],
  [/\bover\b/gi, "동안"],
  [/\bplanned\b/gi, "계획된"],
  [/\bplan\b/gi, "계획"],
  [/\bplans\b/gi, "계획"],
  [/\btransition plan\b/gi, "전환계획"],
  [/\btransition\b/gi, "전환"],
  [/\btaxonomy\b/gi, "분류체계"],
  [/\baffected\b/gi, "영향받은"],
  [/\baffect\b/gi, "영향"],
  [/\bnext\b/gi, "향후"],
  [/\bpast\b/gi, "과거"],
  [/\bnumber\b/gi, "번호"],
  [/\bunique\b/gi, "고유"],
  [/\bproviding\b/gi, "제공"],
  [/\bprovided\b/gi, "제공된"],
  [/\bprovides\b/gi, "제공합니다"],
  [/\bplans\b/gi, "계획"],
  [/\bplace\b/gi, "보유"],
  [/\bevaluating\b/gi, "평가"],
  [/\bevaluated\b/gi, "평가된"],
  [/\bassessed\b/gi, "평가된"],
  [/\binformed\b/gi, "반영된"],
  [/\binterconnections\b/gi, "상호연계성"],
  [/\btype\b/gi, "유형"],
  [/\btypes\b/gi, "유형"],
  [/\btwo\b/gi, "2개"],
  [/\blaw\b/gi, "법률"],
  [/\bmonetary\b/gi, "금전적"],
  [/\bofficer\b/gi, "책임자"],
  [/\bchief\b/gi, "최고"],
  [/\bequivalent\b/gi, "동등한"],
  [/\basset\b/gi, "자산"],
  [/\bclients\b/gi, "고객"],
  [/\binvestees\b/gi, "투자대상"],
  [/\bexposure\b/gi, "노출"],
  [/\baligned\b/gi, "부합하는"],
  [/\bbased\b/gi, "기반"],
  [/\bfinancing\b/gi, "금융"],
  [/\bboundary\b/gi, "경계"],
  [/\bfuel\b/gi, "연료"],
  [/\bfuels\b/gi, "연료"],
  [/\bmethane\b/gi, "메탄"],
  [/\btons\b/gi, "톤"],
  [/\bton\b/gi, "톤"],
  [/\bMWh\b/g, "MWh"],
  [/\bnet zero\b/gi, "넷제로"],
  [/\bzero\b/gi, "제로"],
  [/\bable\b/gi, "가능"],
  [/\bgas\b/gi, "가스"],
  [/\bverified\b/gi, "검증된"],
  [/\bassured\b/gi, "검증된"],
  [/\bthird-party\b/gi, "제3자"],
  [/\bthird\b/gi, "제3자"],
  [/\bparty\b/gi, "기관"],
  [/\bjob\b/gi, "직무"],
  [/\bincluded\b/gi, "포함된"],
  [/\btitle\b/gi, "제목"],
  [/\bmodule\b/gi, "모듈"],
  [/\blist\b/gi, "목록"],
  [/\bnames\b/gi, "명칭"],
  [/\bname\b/gi, "명칭"],
  [/\bput forward\b/gi, "제시"],
  [/\ballows\b/gi, "허용합니다"],
  [/\belectric utility\b/gi, "전력 유틸리티"],
  [/\butility\b/gi, "유틸리티"],
  [/\bcharacterize\b/gi, "특성화"],
  [/\bgrid\b/gi, "전력망"],
  [/\boften\b/gi, "자주"],
  [/\bstrict\b/gi, "엄격한"],
  [/\bregulatory\b/gi, "규제"],
  [/\bcontractual\b/gi, "계약상"],
  [/\bclauses\b/gi, "조항"],
  [/\btherefore\b/gi, "따라서"],
  [/\bnarrative\b/gi, "서술형"],
  [/\bdescription\b/gi, "설명"],
  [/\bexplain\b/gi, "설명"],
  [/\bsuch\b/gi, "이러한"],
  [/\bmember\b/gi, "회원"],
  [/\bframeworks\b/gi, "프레임워크"],
  [/\bbecoming\b/gi, "되는"],
  [/\bcontribute\b/gi, "기여"],
  [/\bdevelopment\b/gi, "개발"],
  [/\bgoals\b/gi, "목표"],
  [/\bgoal\b/gi, "목표"],
  [/\bhelp\b/gi, "도움"],
  [/\binto\b/gi, "으로"],
  [/\bmore\b/gi, "더"],
  [/\bcomplete\b/gi, "완료"],
  [/\bpicture\b/gi, "그림"],
  [/\blow\b/gi, "낮은"],
  [/\bcarrier\b/gi, "운송수단"],
  [/\bmethod\b/gi, "방법"],
  [/\bSourcing method\b/g, "조달 방법"],
  [/\bsourcing\b/gi, "조달"],
  [/\balign\b/gi, "부합"],
  [/\bpreviously\b/gi, "이전에"],
  [/\bgross\b/gi, "총"],
  [/\bparent\b/gi, "모회사"],
  [/\bbreakdown\b/gi, "세부내역"],
  [/\balso\b/gi, "또한"],
  [/\bsources\b/gi, "배출원"],
  [/\bsource\b/gi, "배출원"],
  [/\bthroughout\b/gi, "전반에 걸쳐"],
  [/귀사는 측정 영향 귀사의 포트폴리오 environment입니까\?/gi, "귀사는 포트폴리오가 환경에 미치는 영향을 측정합니까?"],
  [/측정 영향 귀사의 포트폴리오 environment/gi, "포트폴리오가 환경에 미치는 영향 측정"],
  [/climate 전환 계획/gi, "기후전환계획"],
  [/기후 전환계획/gi, "기후전환계획"],
  [/shareholder voting record/gi, "주주 의결권 행사 기록"],
  [/GROUPED_OPTIONS/gi, "그룹 선택"],
  [/GROUPED OPTIONS/gi, "그룹 선택"],
  [/\bgrouped\b/gi, "그룹화된"],
  [/\bidentifier\b/gi, "식별자"],
  [/\bmapping\b/gi, "매핑"],
  [/\bmapped\b/gi, "매핑된"],
  [/\bterms\b/gi, "용어"],
  [/\bcommodity\b/gi, "원자재"],
  [/\bcommodities\b/gi, "원자재"],
  [/\bmining\b/gi, "광업"],
  [/\binsurance\b/gi, "보험"],
  [/\benvironment\b/gi, "환경"],
  [/\bwater\b/gi, "수자원"],
  [/\bocean\b/gi, "해양"],
  [/\bforests\b/gi, "산림"],
  [/\bplastics\b/gi, "플라스틱"],
  [/\boil\b/gi, "석유"],
  [/\bamount\b/gi, "금액"],
  [/\bvulnerable\b/gi, "취약한"],
  [/\bcurrency\b/gi, "통화"],
  [/\bperiod\b/gi, "기간"],
  [/\bpricing\b/gi, "가격 책정"],
  [/\bregulated\b/gi, "규제 대상"],
  [/\bregulation\b/gi, "규제"],
  [/\bpilot\b/gi, "파일럿"],
  [/\bproportion\b/gi, "비율"],
  [/\btime\b/gi, "시간"],
  [/\bsystem\b/gi, "시스템"],
  [/\btool\b/gi, "도구"],
  [/\brelation\b/gi, "관계"],
  [/\bmanage\b/gi, "관리"],
  [/\bdefinition\b/gi, "정의"],
  [/\bdefine\b/gi, "정의"],
  [/\bnature\b/gi, "자연"],
  [/\bindicator\b/gi, "지표"],
  [/\bdifferent\b/gi, "다른"],
  [/\bacross\b/gi, "전반에 걸쳐"],
  [/\bcompetency\b/gi, "역량"],
  [/\bexperience\b/gi, "경험"],
  [/\bline\b/gi, "라인"],
  [/\bdirectors\b/gi, "이사"],
  [/\bdirector\b/gi, "이사"],
  [/\bcorporate\b/gi, "기업"],
  [/\bresponsibility\b/gi, "책임"],
  [/\bvoting\b/gi, "의결권 행사"],
  [/\brecord\b/gi, "기록"],
  [/\baverage\b/gi, "평균"],
  [/\bunable\b/gi, "불가능"],
  [/\balignment\b/gi, "부합"],
  [/\blast\b/gi, "최근"],
  [/\bdisaggregate\b/gi, "세분화"],
  [/\byes\b/gi, "예"],
  [/\bprice\b/gi, "가격"],
  [/\bsustainable\b/gi, "지속가능한"],
  [/\bbut\b/gi, "그러나"],
  [/\bsupplier\b/gi, "공급업체"],
  [/\bsuppliers\b/gi, "공급업체"],
  [/\brights\b/gi, "권리"],
  [/\bapproach\b/gi, "접근방식"],
  [/\bconsolidation\b/gi, "통합"],
  [/\bcontrol\b/gi, "통제"],
  [/\bshare\b/gi, "비중"],
  [/\bequity\b/gi, "지분"],
  [/\beconomic\b/gi, "경제적"],
  [/\bsame\b/gi, "동일"],
  [/\boperational\b/gi, "운영"],
  [/\bits\b/gi, "그것의"],
  [/\baccounting\b/gi, "회계"],
  [/\breflects\b/gi, "반영합니다"],
  [/\bunit\b/gi, "단위"],
  [/\bclass\b/gi, "분류"],
  [/\bvalues\b/gi, "값"],
  [/\beffects\b/gi, "영향"],
  [/\bloan\b/gi, "대출"],
  [/\bcalculated\b/gi, "계산된"],
  [/\bsecurity\b/gi, "안보"],
  [/\bmanager\b/gi, "관리자"],
  [/\bvolume\b/gi, "물량"],
  [/\bvolumes\b/gi, "물량"],
  [/\bcorresponding\b/gi, "해당"],
  [/\badditional\b/gi, "추가"],
  [/\boptional\b/gi, "선택"],
  [/\bbest\b/gi, "최선"],
  [/\bnew\b/gi, "신규"],
  [/\bembodied\b/gi, "내재"],
  [/\bagricultural\b/gi, "농업"],
  [/\bforest\b/gi, "산림"],
  [/\bpractices\b/gi, "관행"],
  [/\bpractice\b/gi, "관행"],
  [/\bmitigation\b/gi, "완화"],
  [/\badaptation\b/gi, "적응"],
  [/\bbenefits\b/gi, "편익"],
  [/\bencourage\b/gi, "권장"],
  [/\bundertake\b/gi, "수행"],
  [/\brole\b/gi, "역할"],
  [/\bimplementation\b/gi, "이행"],
  [/\bprimary\b/gi, "주요"],
  [/\bintensity\b/gi, "집약도"],
  [/\bindirect\b/gi, "간접"],
  [/\bsold\b/gi, "판매된"],
  [/\bpurpose\b/gi, "목적"],
  [/\bpurposes\b/gi, "목적"],
  [/\bduring\b/gi, "동안"],
  [/\baccording\b/gi, "따라"],
  [/\binjection\b/gi, "주입"],
  [/\bstorage\b/gi, "저장"],
  [/\bpathway\b/gi, "경로"],
  [/\bincreasing\b/gi, "증가하는"],
  [/\binvestor\b/gi, "투자자"],
  [/\binvestors\b/gi, "투자자"],
  [/\brecognition\b/gi, "인식"],
  [/귀사는\s*측정\s*영향\s*귀사의\s*포트폴리오\s*환경입니까\?/gi, "귀사는 포트폴리오가 환경에 미치는 영향을 측정합니까?"],
  [/We\s*측정\s*영향\s*당사의\s*포트폴리오\s*climate/gi, "당사 포트폴리오의 기후 영향 측정 여부"],
  [/We\s*측정\s*영향\s*당사의\s*포트폴리오\s*수자원/gi, "당사 포트폴리오의 수자원 영향 측정 여부"],
  [/We\s*측정\s*영향\s*당사의\s*포트폴리오\s*forests/gi, "당사 포트폴리오의 산림 영향 측정 여부"],
  [/We\s*측정\s*영향\s*당사의\s*포트폴리오\s*biodiversity/gi, "당사 포트폴리오의 생물다양성 영향 측정 여부"],
  [/주된 이유 에 대한 아님 측정 포트폴리오 영향 climate/gi, "포트폴리오의 기후 영향을 측정하지 않는 주된 이유"],
  [/그 이유를 설명 귀사 아님 측정 그것의 포트폴리오 영향 climate/gi, "포트폴리오의 기후 영향을 측정하지 않는 이유를 설명하십시오"],
  [/그 이유를 설명 귀사 아님 측정 그것의 포트폴리오 영향 수자원/gi, "포트폴리오의 수자원 영향을 측정하지 않는 이유를 설명하십시오"],
  [/\bclimate-related\b/gi, "기후 관련"],
  [/\bclimate\b/gi, "기후"],
  [/금융기관'/gi, "금융기관의"],
  [/\bMost\b/g, "대부분의"],
  [/\bmost\b/g, "대부분의"],
  [/\boccurs\b/gi, "발생합니다"],
  [/포트폴리오s/gi, "포트폴리오"],
  [/\bspecific\b/gi, "구체적인"],
  [/관리 it properly/gi, "적절히 관리"],
  [/\binforms\b/gi, "알려줍니다"],
  [/\bextent\b/gi, "정도"],
  [/\bwe\b/gi, "당사"],
  [/\bso\b/gi, "그렇게"],
  [/just check 여부/gi, "다음을 확인하도록"],
  [/No, 및 당사 아님 계획 그렇게 향후 2개 연도/gi, "아니요, 향후 2년 내에 진행할 계획이 없습니다"],
  [/No, 및 we do not plan to do 그렇게 next two years/gi, "아니요, 향후 2년 내에 진행할 계획이 없습니다"],
  [/No, 및 we do not plan to do so next two years/gi, "아니요, 향후 2년 내에 진행할 계획이 없습니다"],
  [/No, 및 당사 아님 계획 그렇게 향후 2개 연도/gi, "아니요, 향후 2년 내 계획 없음"],
  [/기타 탄소 footprinting 및\/또는 노출 지표\s*\(as defined 별 TCFD\)/gi, "기타 탄소발자국 및/또는 노출 지표(TCFD 정의)"],
  [/설명하십시오:\s*왜 귀사 아님 측정 그것의 포트폴리오 영향 수자원/gi, "포트폴리오의 수자원 영향을 측정하지 않는 이유 설명"],
  [/설명하십시오:\s*왜 귀사 아님 측정 그것의 포트폴리오 영향 기후/gi, "포트폴리오의 기후 영향을 측정하지 않는 이유 설명"],
  [/주된 이유 에 대한 아님 측정 포트폴리오 영향 수자원/gi, "포트폴리오의 수자원 영향을 측정하지 않는 주된 이유"],
  [/주된 이유 에 대한 아님 측정 포트폴리오 영향 기후/gi, "포트폴리오의 기후 영향을 측정하지 않는 주된 이유"],
  [/기후 Change/gi, "기후변화"],
];

const REGION_CODES = (
  "AF AX AL DZ AS AD AO AI AQ AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BQ BA BW BV BR IO BN BG BF BI CV KH CM CA KY CF TD CL CN CX CC CO KM CG CD CK CR CI HR CU CW CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FK FO FJ FI FR GF PF TF GA GM GE DE GH GI GR GL GD GP GU GT GG GN GW GY HT HM VA HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MK MP NO OM PK PW PS PA PG PY PE PH PN PL PT PR QA RE RO RU RW BL SH KN LC MF PM VC WS SM ST SA SN RS SC SL SG SX SK SI SB SO ZA GS SS ES LK SD SR SJ SE CH SY TW TJ TZ TH TL TG TK TO TT TN TR TM TC TV UG UA AE GB US UM UY UZ VU VE VN VG VI WF EH YE ZM ZW XK"
).split(" ");

let koRegionNameMap = null;

function getKoRegionNameMap() {
  if (koRegionNameMap) return koRegionNameMap;
  koRegionNameMap = new Map();
  try {
    if (typeof Intl !== "undefined" && Intl.DisplayNames) {
      const en = new Intl.DisplayNames(["en"], { type: "region" });
      const ko = new Intl.DisplayNames(["ko"], { type: "region" });
      REGION_CODES.forEach((code) => {
        const enName = en.of(code);
        const koName = ko.of(code);
        if (enName && koName) koRegionNameMap.set(enName, koName);
      });
    }
  } catch (error) {
    // Country-name localization is a convenience layer; keep the DB usable if Intl support differs.
  }
  Object.entries({
    "United States": "미국",
    "United States of America": "미국",
    "United Kingdom": "영국",
    "United Kingdom of Great Britain and Northern Ireland": "영국",
    "Korea, Republic of": "대한민국",
    "Republic of Korea": "대한민국",
    "South Korea": "대한민국",
    "Korea": "대한민국",
    "Viet Nam": "베트남",
    "Vietnam": "베트남",
    "Russian Federation": "러시아",
    "Russia": "러시아",
    "Türkiye": "튀르키예",
    "Turkey": "튀르키예",
    "Taiwan, China": "대만",
    "Hong Kong SAR, China": "홍콩",
    "Macao SAR, China": "마카오",
    "Iran, Islamic Republic of": "이란",
    "Syrian Arab Republic": "시리아",
    "Tanzania, United Republic of": "탄자니아",
    "Bolivia, Plurinational State of": "볼리비아",
    "Venezuela, Bolivarian Republic of": "베네수엘라",
    "Moldova, Republic of": "몰도바",
    "Lao People's Democratic Republic": "라오스",
    "Côte d'Ivoire": "코트디부아르",
    "Czechia": "체코",
    "Kosovo": "코소보",
    "Cabo Verde": "카보베르데",
    "Central African Re공개": "중앙아프리카공화국",
    "Central African Republic": "중앙아프리카공화국",
    "China, Macao Special Administrative 지역": "마카오",
    "Democratic People's Re공개 Korea": "북한",
    "Democratic People's Republic of Korea": "북한",
    "Democratic Re공개 의 Congo": "콩고민주공화국",
    "Democratic Republic of the Congo": "콩고민주공화국",
    "Dominican Re공개": "도미니카공화국",
    "Dominican Republic": "도미니카공화국",
    "Falkland Islands (Malvinas)": "포클랜드 제도",
    "Heard Island 및 McDonald Islands": "허드 맥도널드 제도",
    "Holy See": "교황청",
    "Iran (Islamic Re공개)": "이란",
    "Lao People's Democratic Re공개": "라오스",
    "Micronesia (Federated States)": "미크로네시아",
    "Myanmar": "미얀마",
    "New Caledonia": "뉴칼레도니아",
    "신규 Caledonia": "뉴칼레도니아",
    "New Zealand": "뉴질랜드",
    "신규 Zealand": "뉴질랜드",
  }).forEach(([enName, koName]) => koRegionNameMap.set(enName, koName));
  return koRegionNameMap;
}

function exactKoDisplay(value) {
  const text = String(value ?? "").trim();
  if (!text) return "";
  return getKoRegionNameMap().get(text) || "";
}

function displayText(value) {
  let out = String(value ?? "");
  if (state.lang !== "ko" || !out) return out;
  const exact = exactKoDisplay(out);
  if (exact) return exact;
  for (const [pattern, replacement] of KO_DISPLAY_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  out = exactKoDisplay(out) || out;
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

function setUrlParam(url, key, value) {
  if (value) {
    url.searchParams.set(key, value);
  } else {
    url.searchParams.delete(key);
  }
}

function readFilterState() {
  return {
    search: $("searchInput")?.value.trim() || "",
    module: $("moduleFilter")?.value || "",
    location: $("locationFilter")?.value || "",
    type: $("typeFilter")?.value || "",
    flag: $("flagFilter")?.value || "",
    sector: $("sectorFilter")?.value || "",
    changed: $("changedOnly")?.checked || false,
    favorites: $("favoritesOnly")?.checked || false,
    density: state.density,
  };
}

function writeFilterParams(url, filters = readFilterState()) {
  setUrlParam(url, "search", filters.search || "");
  setUrlParam(url, "module", filters.module || "");
  setUrlParam(url, "location", filters.location || "");
  setUrlParam(url, "type", filters.type || "");
  setUrlParam(url, "flag", filters.flag || "");
  setUrlParam(url, "sector", filters.sector || "");
  setUrlParam(url, "changed", filters.changed ? "1" : "");
  setUrlParam(url, "favorites", filters.favorites ? "1" : "");
  setUrlParam(url, "density", filters.density === "compact" ? "compact" : "");
}

function updateDensityButtons() {
  for (const item of document.querySelectorAll(".seg")) {
    item.classList.toggle("active", item.dataset.density === state.density);
  }
}

function setSelectValue(id, value) {
  const node = $(id);
  if (!node) return;
  node.value = value || "";
  if (value && node.value !== value) node.value = "";
}

function applyFilterState(filters) {
  if ($("searchInput")) $("searchInput").value = filters.search || "";
  setSelectValue("moduleFilter", filters.module);
  setSelectValue("locationFilter", filters.location);
  setSelectValue("typeFilter", filters.type);
  setSelectValue("flagFilter", filters.flag);
  setSelectValue("sectorFilter", filters.sector);
  if ($("changedOnly")) $("changedOnly").checked = Boolean(filters.changed);
  if ($("favoritesOnly")) $("favoritesOnly").checked = Boolean(filters.favorites);
  state.density = filters.density === "compact" ? "compact" : "comfortable";
  updateDensityButtons();
}

function urlFilterState() {
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get("search") || "",
    module: params.get("module") || "",
    location: params.get("location") || "",
    type: params.get("type") || "",
    flag: params.get("flag") || "",
    sector: params.get("sector") || "",
    changed: params.get("changed") === "1",
    favorites: params.get("favorites") === "1",
    density: params.get("density") === "compact" ? "compact" : "comfortable",
  };
}

function syncUrl(code = state.selectedCode) {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("lang", state.lang);
  setUrlParam(nextUrl, "q", code || "");
  writeFilterParams(nextUrl);
  nextUrl.searchParams.delete("refresh");
  window.history.replaceState({}, "", nextUrl);
}

function setQuestionUrl(code) {
  syncUrl(code);
}

function publicQuestionUrl(code) {
  const url = new URL(PUBLIC_BASE_URL);
  url.searchParams.set("lang", state.lang);
  url.searchParams.set("q", code);
  writeFilterParams(url);
  url.searchParams.set("refresh", URL_STATE_VERSION);
  return url.toString();
}

async function copyCurrentViewLink() {
  syncUrl();
  const current = new URL(window.location.href);
  const url = new URL(PUBLIC_BASE_URL);
  for (const [key, value] of current.searchParams.entries()) {
    url.searchParams.set(key, value);
  }
  url.searchParams.set("refresh", URL_STATE_VERSION);
  const link = url.toString();
  try {
    await navigator.clipboard.writeText(link);
    qaLog("INFO", "Filtered view link copied", { url: link, results: state.filtered.length });
  } catch {
    window.prompt("Copy this link", link);
    qaLog("WARNING", "Filtered view link copy fallback", { url: link, results: state.filtered.length });
  }
  const button = $("copyViewLinkButton");
  if (button) {
    button.textContent = t("viewLinkCopied");
    window.setTimeout(() => {
      button.textContent = t("copyViewLink");
    }, 1400);
  }
}

function csvValue(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function exportFilteredCsv() {
  const headers =
    state.lang === "ko"
      ? ["문항번호", "모듈", "문항명", "반영 위치", "응답 방법", "변경 여부", "변경 상태", "D", "A", "M", "L", "공유 URL"]
      : ["Question code", "Module", "Question title", "Location", "Response method", "Changed", "Change status", "D", "A", "M", "L", "Share URL"];
  const rows = state.filtered.map((question) => [
    `M${question.code}`,
    textBy(question, "moduleTitle", "moduleTitleKo"),
    textBy(question, "questionText", "questionKo"),
    locationLabel(question.location),
    textBy(question, "questionType", "questionTypeKo"),
    question.isChanged ? t("changedApplied") : t("noChangeVerified"),
    textBy(question, "changeStatus", "changeStatusKo") || "",
    question.daml?.D || "",
    question.daml?.A || "",
    question.daml?.M || "",
    question.daml?.L || "",
    publicQuestionUrl(question.code),
  ]);
  const csv = `\ufeff${[headers, ...rows].map((row) => row.map(csvValue).join(",")).join("\r\n")}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  link.href = url;
  link.download = `cdp_questionnaire_${state.lang}_${stamp}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  qaLog("INFO", "Filtered CSV exported", { rows: state.filtered.length, lang: state.lang });
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
  qaLog("INFO", "Index load started", { path: "./data/index.json" });
  const response = await fetch("./data/index.json", { cache: "no-store" });
  if (!response.ok) throw new Error(`index.json load failed: ${response.status}`);
  state.index = await response.json();
  state.filtered = state.index.questions;
  qaLog("INFO", "Index load completed", { questions: state.index.counts?.questions || state.filtered.length });
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
  setText("labelFavoritesOnly", t("favoritesOnly"));
  setText("labelQuestionList", t("questionList"));
  setText("copyViewLinkButton", t("copyViewLink"));
  setText("exportCsvButton", t("exportCsv"));
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
  const favoritesOnly = $("favoritesOnly").checked;

  state.filtered = state.index.questions.filter((question) => {
    if (query && !question.searchText.includes(query)) return false;
    if (moduleValue && question.module !== moduleValue) return false;
    if (location && question.location !== location) return false;
    if (type && question.questionType !== type) return false;
    if (flag && !question.flags?.[flag]) return false;
    if (changedOnly && !question.isChanged) return false;
    if (favoritesOnly && !state.favorites.has(question.code)) return false;
    if (!matchesSector(question, sector)) return false;
    return true;
  });

  if (!state.filtered.find((question) => question.code === state.selectedCode)) {
    state.selectedCode = state.filtered[0]?.code || "";
  }

  syncUrl();
  qaLog("INFO", "Filters applied", {
    query,
    module: moduleValue,
    location,
    type,
    flag,
    sector,
    changedOnly,
    favoritesOnly,
    results: state.filtered.length,
    selectedCode: state.selectedCode,
  });
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
      const favoriteChip = state.favorites.has(question.code) ? chip(t("favoriteChip"), "favorite") : "";
      const pointText = `D ${question.daml.D} · A ${question.daml.A} · M ${question.daml.M} · L ${question.daml.L}`;
      const title = textBy(question, "questionText", "questionKo");
      return `<button class="question-row ${state.density === "compact" ? "compact" : ""} ${question.code === state.selectedCode ? "active" : ""}" data-code="${escapeHtml(question.code)}" type="button">
        <div class="question-topline">
          <span class="q-code">M${escapeHtml(question.code)}</span>
          <span class="row-chip-group">${favoriteChip}${changedChip}</span>
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
  const response = await fetch(`./data/${question.detailFile}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`${code} detail load failed`);
  const detail = await response.json();
  state.detailCache.set(code, detail);
  return detail;
}

async function selectQuestion(code) {
  state.selectedCode = code;
  setQuestionUrl(code);
  qaLog("INFO", "Question selected", { code });
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
  const isFavorite = state.favorites.has(detail.code);
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
        <div class="detail-actions">
          <div class="q-meta">${chip(textBy(change, "change_status", "change_statusKo") || "-", detail.change?.review_status === "변경 반영" ? "changed" : "ok")}</div>
          <button class="text-button favorite-button ${isFavorite ? "active" : ""}" id="favoriteQuestionButton" type="button">${escapeHtml(isFavorite ? t("removeFavorite") : t("addFavorite"))}</button>
          <button class="text-button share-button" id="copyQuestionLink" type="button">${escapeHtml(t("copyLink"))}</button>
        </div>
      </div>
      <h2 class="detail-title">${escapeHtml(title)}</h2>
      ${renderSectionNav()}
    </div>

    <section class="detail-section" id="section-change">
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
      ])}
    </section>

    <section class="detail-section" id="section-basic">
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

    <section class="detail-section" id="section-response">
      <h3>${t("responseMethod")}</h3>
      ${renderResponseMethod(detail)}
    </section>

    <section class="detail-section" id="section-dropdown">
      <h3>${t("dropdownOptions")}</h3>
      ${renderDropdowns(detail)}
    </section>

    <section class="detail-section" id="section-table">
      <h3>${t("tableStructure")}</h3>
      ${renderResponseTable(detail)}
    </section>

    <section class="detail-section" id="section-points">
      <h3>${t("pointAllocation")}</h3>
      ${renderPoints(detail)}
    </section>

    <section class="detail-section" id="section-criteria">
      <h3>${t("scoringCriteria")}</h3>
      ${renderCriteria(detail)}
    </section>

    <section class="detail-section" id="section-guidance">
      <h3>${t("reportingGuidance")}</h3>
      ${renderGuidance(detail)}
    </section>

    <section class="detail-section" id="section-sources">
      <h3>${t("sources")}</h3>
      ${renderSources(detail)}
    </section>
  `;
  bindDetailControls(detail);
}

function renderSectionNav() {
  const sections = [
    ["section-change", t("changeStatus")],
    ["section-basic", t("basicInfo")],
    ["section-response", t("responseMethod")],
    ["section-dropdown", t("dropdownOptions")],
    ["section-table", t("tableStructure")],
    ["section-points", t("pointAllocation")],
    ["section-criteria", t("scoringCriteria")],
    ["section-guidance", t("reportingGuidance")],
  ];
  return `<div class="section-nav" aria-label="${escapeHtml(t("sectionJump"))}">
    ${sections.map(([id, label]) => `<button class="section-link" data-section="${escapeHtml(id)}" type="button">${escapeHtml(label)}</button>`).join("")}
  </div>`;
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

function toggleFavorite(code) {
  if (state.favorites.has(code)) {
    state.favorites.delete(code);
  } else {
    state.favorites.add(code);
  }
  saveFavorites();
  qaLog("INFO", "Favorite toggled", { code, isFavorite: state.favorites.has(code) });
  applyFilters();
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
  for (const button of document.querySelectorAll(".section-link")) {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.section);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  const copyLink = $("copyQuestionLink");
  if (copyLink) {
    copyLink.addEventListener("click", async () => {
      const url = publicQuestionUrl(detail.code);
      try {
        await navigator.clipboard.writeText(url);
        copyLink.textContent = t("copied");
        qaLog("INFO", "Question link copied", { code: detail.code });
      } catch (error) {
        window.prompt(t("copyLink"), url);
        qaLog("WARNING", "Question link copy fallback", { code: detail.code, error: error.message });
      }
      window.setTimeout(() => {
        copyLink.textContent = t("copyLink");
      }, 1400);
    });
  }
  const favoriteButton = $("favoriteQuestionButton");
  if (favoriteButton) {
    favoriteButton.addEventListener("click", () => toggleFavorite(detail.code));
  }
}

function bindEvents() {
  const filterIds = ["searchInput", "moduleFilter", "locationFilter", "typeFilter", "flagFilter", "sectorFilter", "changedOnly", "favoritesOnly"];
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
    $("favoritesOnly").checked = false;
    qaLog("INFO", "Filters reset");
    applyFilters();
  });
  $("copyViewLinkButton").addEventListener("click", copyCurrentViewLink);
  $("exportCsvButton").addEventListener("click", exportFilteredCsv);
  for (const button of document.querySelectorAll(".seg")) {
    button.addEventListener("click", () => {
      state.density = button.dataset.density;
      updateDensityButtons();
      syncUrl();
      qaLog("INFO", "List density changed", { density: state.density });
      renderQuestionList();
    });
  }
  for (const button of document.querySelectorAll(".lang-button")) {
    button.addEventListener("click", () => {
      const filters = readFilterState();
      state.lang = button.dataset.lang;
      updateStaticLabels();
      populateFilters();
      applyFilterState(filters);
      renderMetrics();
      applyFilters();
    });
  }
}

async function init() {
  try {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang === "en" || urlLang === "ko") state.lang = urlLang;
    loadFavorites();
    await loadIndex();
    const urlQuestion = new URLSearchParams(window.location.search).get("q");
    if (urlQuestion && state.index.questions.some((question) => question.code === urlQuestion)) {
      state.selectedCode = urlQuestion;
    }
    updateStaticLabels();
    populateFilters();
    applyFilterState(urlFilterState());
    renderMetrics();
    renderModules();
    bindEvents();
    applyFilters();
    qaLog("INFO", "App initialized", { lang: state.lang, selectedCode: state.selectedCode });
  } catch (error) {
    qaLog("ERROR", "App loading error", { error: error.message });
    document.body.innerHTML = `<main class="app-shell"><div class="empty-detail"><strong>App loading error</strong><span>${escapeHtml(error.message)}</span></div></main>`;
  }
}

init();
