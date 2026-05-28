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
    appTitle: "2026 CDP CC DB",
    sourcePrefix: "변경 추적표",
    metricQuestions: "전체 문항",
    metricChanged: "변경 문항",
    metricPpt: "정성 PPT",
    metricExcel: "정량 Excel",
    metricNoChange: "동일 문항",
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
    changedYes: "O",
    changedNo: "X",
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
    inputGuide: "작성 메모",
    narrativeGuideMissing: "정성 서술형 입력 · 영문 글자 수 제한: 원문 DB에 명시 없음(제출 전 CDP 포털 제한 확인)",
    narrativeGuideWithLimit: "정성 서술형 입력 · 영문 글자 수 제한",
    selectGuide: "선택지는 드롭다운/응답 선택지 섹션에서 확인",
    numericGuide: "숫자 입력",
    dateGuide: "날짜 입력",
    attachmentGuide: "파일 첨부",
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
    appTitle: "2026 CDP CC DB",
    sourcePrefix: "Changes Tracker",
    metricQuestions: "All questions",
    metricChanged: "Changed questions",
    metricPpt: "Qualitative PPT",
    metricExcel: "Quantitative Excel",
    metricNoChange: "Unchanged questions",
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
    changedYes: "O",
    changedNo: "X",
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
    inputGuide: "Input note",
    narrativeGuideMissing: "Narrative text input. English character limit is not stated in the source DB; confirm the CDP portal limit before submission.",
    narrativeGuideWithLimit: "Narrative text input. English character limit",
    selectGuide: "See dropdown/response options section for selectable values.",
    numericGuide: "Numeric input",
    dateGuide: "Date input",
    attachmentGuide: "File attachment",
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
const URL_STATE_VERSION = "ui-v24-best-guide";
const FAVORITES_STORAGE_KEY = "cdpQuestionDbFavorites";

const BEST_GUIDE_LABELS = {
  ko: {
    title: "최고득점 가이드",
    noticeTitle: "평가방법론 기반 자동 가이드",
    notice:
      "아래 내용은 D/A/M/L 평가방법론, 응답 열, 드롭다운 선택지를 조합해 자동 정리한 작성 방향입니다. 실제 사실과 증빙에 맞는 선택지만 사용하십시오.",
    pointSummary: "선택 섹터 기준 배점",
    recommendedOptions: "추천 드롭다운 선택",
    completionRules: "필수 작성 범위",
    narrativeChecklist: "서술형 작성 체크리스트",
    template: "복붙용 서술형 골격",
    evidence: "주의 및 증빙",
    noCriteria: "이 문항은 평가방법론 데이터가 없어 최고득점 가이드를 자동 산출하기 어렵습니다.",
    noSpecificOption:
      "평가방법론에서 특정 최고점 선택지를 명확히 자동 식별하지 못했습니다. 표시되는 모든 필수 셀을 작성하고, 실제 상태에 맞는 선택지를 고른 뒤 근거를 충분히 설명하십시오.",
    anyOption: "제시된 선택지 중 실제에 맞는 항목 선택",
    level: "평가단계",
    column: "응답 열",
    selection: "선택 권장값",
    points: "관련 점수",
    confidence: "자동 해석 신뢰도",
    confidenceHigh: "높음",
    confidenceMedium: "중간",
    confidenceReview: "검토 필요",
    confidenceHighNote: "평가방법론에서 특정 선택지와 점수를 직접 추출했습니다.",
    confidenceMediumNote: "완료 셀/행, 최소 작성 조건 중심으로 자동 해석했습니다.",
    confidenceReviewNote: "상위/하위 문항 또는 복합 조건이 있어 수동 확인이 필요합니다.",
    mustSelect: "선택해야 할 값",
    rowsColumns: "작성해야 할 행/열",
    minimums: "몇 개 이상",
    exclusions: "제외 가능한 행/열",
    dependencies: "상위/하위 문항 조건",
    writingStructure: "작성 구조",
    requiredKeywords: "필수 포함 키워드",
    exampleResponse: "예시 문장",
    evidenceExamples: "증빙자료 예시",
    noChecklistItems: "자동으로 식별된 항목이 없습니다. 평가방법론 원문을 함께 확인하십시오.",
    noNarrative:
      "서술형 입력 열이 없는 문항입니다. 드롭다운/수치/첨부 등 표시된 입력값을 빠짐없이 작성하는 것이 핵심입니다.",
  },
  en: {
    title: "Best-Score Guide",
    noticeTitle: "Auto guide based on scoring methodology",
    notice:
      "This guide is automatically derived from the D/A/M/L scoring criteria, response columns, and dropdown options. Use only selections that are true and supportable with evidence.",
    pointSummary: "Point allocation for selected sector",
    recommendedOptions: "Recommended dropdown selections",
    completionRules: "Required completion scope",
    narrativeChecklist: "Narrative response checklist",
    template: "Copy-ready narrative outline",
    evidence: "Caution and evidence",
    noCriteria: "No scoring methodology data is available, so a best-score guide cannot be generated automatically.",
    noSpecificOption:
      "No specific highest-scoring option could be identified automatically. Complete every displayed required cell, select the option that reflects the actual situation, and explain the evidence clearly.",
    anyOption: "Select any applicable option shown in the questionnaire",
    level: "Level",
    column: "Response column",
    selection: "Recommended value",
    points: "Related points",
    confidence: "Auto-interpretation confidence",
    confidenceHigh: "High",
    confidenceMedium: "Medium",
    confidenceReview: "Needs review",
    confidenceHighNote: "Specific options and scoring points were directly extracted from the methodology.",
    confidenceMediumNote: "The guide is mainly based on completion, minimum-row, or cell-completion rules.",
    confidenceReviewNote: "Parent/child questions or complex conditions require manual confirmation.",
    mustSelect: "Values to select",
    rowsColumns: "Rows/columns to complete",
    minimums: "Minimum quantity",
    exclusions: "Rows/columns that may be excluded",
    dependencies: "Parent/child question conditions",
    writingStructure: "Writing structure",
    requiredKeywords: "Required keywords",
    exampleResponse: "Example wording",
    evidenceExamples: "Evidence examples",
    noChecklistItems: "No item was identified automatically. Review the original scoring criteria as well.",
    noNarrative:
      "This question has no narrative text column. The key is to complete all displayed dropdown, numeric, and attachment inputs accurately.",
  },
};

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
  [/이 섹션은 문항 응답에 필요한 추가 작성 기준을 설명합니다\. 응답방법과 선택지를 함께 확인하여 작성하십시오\./g, "문항 의존성 및 표시 조건은 응답방법과 선택지 조건을 함께 확인하여 작성하십시오."],
  [/Lack(?: of)? internal resources, capabilities, or expertise \(e\.g\., due to organization size\)/gi, "내부 자원, 역량 또는 전문성 부족(예: 조직 규모로 인해)"],
  [/Lack internal resources, capabilities, 또는 expertise \(e\.g\., 때문에 조직 size\)/gi, "내부 자원, 역량 또는 전문성 부족(예: 조직 규모로 인해)"],
  [/Lack of internal resources, capabilities, 또는 expertise \(e\.g\., due to 조직 size\)/gi, "내부 자원, 역량 또는 전문성 부족(예: 조직 규모로 인해)"],
  [/기후 변경/g, "기후변화"],
  [/environmental outcomes/gi, "환경 결과"],
  [/환경 outcomes/gi, "환경 결과"],
  [/scenario analysis/gi, "시나리오 분석"],
  [/Scenario analysis/gi, "시나리오 분석"],
  [/decision makers/gi, "의사결정자"],
  [/potential outcomes/gi, "잠재적 결과"],
  [/a variety of scenarios/gi, "다양한 시나리오"],
  [/a variety scenarios/gi, "다양한 시나리오"],
  [/outcomes/gi, "결과"],
  [/implications/gi, "영향"],
  [/governance/gi, "거버넌스"],
  [/wider business strategy/gi, "보다 넓은 사업전략"],
  [/wider/gi, "보다 넓은"],
  [/a scenario describes a potential path/gi, "시나리오는 잠재적 경로를 설명합니다"],
  [/a particular outcome/gi, "특정 결과"],
  [/highlighting central elements/gi, "핵심 요소를 강조"],
  [/critical uncertainties/gi, "핵심 불확실성"],
  [/enhance critical strategic thinking/gi, "비판적 전략 사고를 강화"],
  [/business-as-usual/gi, "기존 사업 관행"],
  [/assumptions/gi, "가정"],
  [/explore alternatives/gi, "대안을 검토"],
  [/relative and absolute impact/gi, "상대적 및 절대적 영향"],
  [/likelihood occurrence/gi, "발생 가능성"],
  [/forecasts/gi, "예측"],
  [/predictions/gi, "예측"],
  [/tools describe potential pathways/gi, "잠재적 경로를 설명하는 도구"],
  [/potential pathways/gi, "잠재적 경로"],
  [/themselves/gi, "그 자체"],
  [/\blead\b/gi, "이어지는"],
  [/a possible 미래/gi, "가능한 미래"],
  [/drawing attention key factors/gi, "핵심 요인에 주목"],
  [/It a 도구/gi, "이는 도구입니다"],
  [/challenging/gi, "도전적으로 검토하여"],
  [/Scenarios/gi, "시나리오"],
  [/tools describe/gi, "설명하는 도구"],
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
    "Bolivia (Plurinational State)": "볼리비아",
    "Bolivia (Plurinational State of)": "볼리비아",
    "Bonaire, Sint Eustatius and Saba": "보네르, 신트외스타티위스 및 사바",
    "Bonaire, Sint Eustatius 및 Saba": "보네르, 신트외스타티위스 및 사바",
    "Brunei Darussalam": "브루나이",
    "Congo": "콩고",
    "Iran (Islamic Republic)": "이란",
    "Iran (Islamic Republic of)": "이란",
    "Pitcairn": "핏케언 제도",
    "Republic Moldova": "몰도바",
    "Republic of Moldova": "몰도바",
    "Saint Helena": "세인트헬레나",
    "Saint Lucia": "세인트루시아",
    "Saint Martin (French part)": "생마르탱",
    "Sint Maarten (Dutch part)": "신트마르턴",
    "State Palestine": "팔레스타인",
    "State of Palestine": "팔레스타인",
    "United Republic Tanzania": "탄자니아",
    "United Republic of Tanzania": "탄자니아",
    "United States Minor Outlying Islands": "미국령 군소 제도",
    "United States Virgin Islands": "미국령 버진아일랜드",
    "Venezuela, Bolivarian Republic of": "베네수엘라",
    "Venezuela (Bolivarian Republic)": "베네수엘라",
    "Venezuela (Bolivarian Republic of)": "베네수엘라",
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

const KO_VISIBLE_ARTIFACT_REPLACEMENTS = [
  [/Changed\s+및\s+reflected/gi, "변경 반영"],
  [/Changed and reflected/gi, "변경 반영"],
  [/Modified\s+문항/gi, "문항 수정"],
  [/Taxo아니요my/gi, "택소노미"],
  [/taxo아니요my/gi, "택소노미"],
  [/environment모든y/gi, "환경적으로"],
  [/eco아니요mic/gi, "경제"],
  [/Extern모든y classified/gi, "외부 분류"],
  [/Intern모든y classified/gi, "내부 분류"],
  [/used\s+식별\s+product characteristics/gi, "제품 특성 식별에 사용"],
  [/product characteristics/gi, "제품 특성"],
  [/please specify/gi, "직접 입력"],
  [/low-탄소/gi, "저탄소"],
  [/낮음-탄소/gi, "저탄소"],
  [/carbon-reducing/gi, "탄소 감축"],
  [/aligned\s+택소노미\s+또는\s+방법론\s+relation\s+total\s+포트폴리오\s+가치/gi, "총 포트폴리오 가치 대비 택소노미 또는 방법론 부합"],
  [/%\s+의\s+포트폴리오\s+부합하는\s+택소노미\s+또는\s+방법론\s+관계\s+총\s+포트폴리오\s+가치/gi, "총 포트폴리오 가치 대비 택소노미 또는 방법론 부합 비율"],
];

function cleanVisibleKoArtifacts(value) {
  let out = String(value ?? "");
  for (const [pattern, replacement] of KO_VISIBLE_ARTIFACT_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

function displayText(value) {
  let out = String(value ?? "");
  if (state.lang !== "ko" || !out) return out;
  const exact = exactKoDisplay(out);
  if (exact) return exact;
  for (const [pattern, replacement] of KO_DISPLAY_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  out = cleanVisibleKoArtifacts(out);
  out = exactKoDisplay(out) || out;
  return out
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function isPoorKoreanText(value) {
  const text = String(value ?? "").trim();
  if (!text) return true;
  if (/^[-,.;:/()\s]+$/.test(text)) return true;
  if (/,,|,\s*,|:\s*,|^\W{1,4}\s*(또는|및|와|과)/.test(text)) return true;
  const hangulCount = (text.match(/[가-힣]/g) || []).length;
  const latinWords = text.match(/[A-Za-z]{3,}/g) || [];
  if (!hangulCount && /[A-Za-z]/.test(text)) return true;
  if (latinWords.length >= 4 && hangulCount < 10) return true;
  if (/\b(use|used|available|relevant|specific|analysis|frequency|scenario|environmental|organization|business|question|response|method|option)\b/i.test(text) && hangulCount < text.length / 3) {
    return true;
  }
  return false;
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

function richText(value, options = {}) {
  const raw = (options.preserveKo ? String(value ?? "") : displayText(value)).trim();
  if (!raw) return "";
  const normalized = raw
    .replace(/\r\n/g, "\n")
    .replace(/\s*•\s*/g, "\n• ")
    .replace(/\s+-\s+/g, "\n- ")
    .replace(/([.!?])\s+(?=[가-힣A-Z0-9'"])/g, "$1\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const lines = normalized
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const bulletCount = lines.filter((line) => /^[•\-*]\s+/.test(line)).length;
  if (bulletCount < 2 && lines.length < 2) return nl(normalized);
  if (bulletCount < 2) {
    return `<div class="rich-text">${lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}</div>`;
  }

  const blocks = [];
  let list = [];
  const hasVisibleText = (item) => /[A-Za-z0-9가-힣]/.test(String(item || "").replace(/[•*\-.,;:()[\]'"“”‘’\s]/g, ""));
  const flushList = () => {
    if (!list.length) return;
    blocks.push(`<ul class="bullet-list">${list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`);
    list = [];
  };

  for (const line of lines) {
    if (/^[•\-*]\s+/.test(line)) {
      const item = line.replace(/^[•\-*]\s+/, "").trim();
      if (hasVisibleText(item)) list.push(item);
    } else {
      flushList();
      if (hasVisibleText(line)) blocks.push(`<p>${escapeHtml(line)}</p>`);
    }
  }
  flushList();
  return `<div class="rich-text">${blocks.join("")}</div>`;
}

const GUIDANCE_TYPE_LABELS_KO = {
  "Change From Last Year": "전년 대비 변경사항",
  "Question Dependencies": "문항 의존성",
  "Requested Content": "요청 내용",
  "Requested Content - continued": "요청 내용 - 계속",
  "Additional Information": "추가 정보",
  "Ambition": "목표수준",
  "Explanation of Terms": "용어 설명",
  "Example Response": "예시 응답",
};

function guidanceTypeText(block) {
  if (state.lang !== "ko") return block?.type || "Guidance";
  return GUIDANCE_TYPE_LABELS_KO[block?.type] || displayText(block?.typeKo || block?.type || "가이던스");
}

function guidanceBodyText(block) {
  if (state.lang !== "ko") return block?.text || "";
  const ko = String(block?.textKo || "").trim();
  if (ko) return ko;
  return displayText(block?.text || "");
}

function compact(value, max = 180) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text.length <= max ? text : `${text.slice(0, max - 3)}...`;
}

function questionTitleOnly(value) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  if (!text) return "";

  const questionEnd = text.search(/[?？]/);
  if (questionEnd >= 0 && questionEnd < 280) return text.slice(0, questionEnd + 1).trim();

  const instructionEndings = [
    "제공하십시오.",
    "제공하십시오",
    "입력하십시오.",
    "입력하십시오",
    "설명하십시오.",
    "설명하십시오",
    "명시하십시오.",
    "명시하십시오",
    "보고하십시오.",
    "보고하십시오",
    "선택하십시오.",
    "선택하십시오",
    "작성하십시오.",
    "작성하십시오",
    "공시하십시오.",
    "공시하십시오",
  ];
  const endingPositions = instructionEndings
    .map((ending) => {
      const index = text.indexOf(ending);
      return index >= 18 && index < 280 ? index + ending.length : -1;
    })
    .filter((index) => index > 0);
  if (endingPositions.length) return text.slice(0, Math.min(...endingPositions)).trim();

  for (let index = 24; index < Math.min(text.length, 260); index += 1) {
    if (text[index] !== ".") continue;
    const previous = text[index - 1] || "";
    const next = text[index + 1] || "";
    if (/\d/.test(previous) && /\d/.test(next)) continue;
    if (/[A-Za-z]/.test(previous) && /[A-Za-z]/.test(next)) continue;
    return text.slice(0, index + 1).trim();
  }

  return compact(text, 150);
}

function questionListTitle(question) {
  if (state.lang === "ko") return questionTitleOnly(question.listTitleKo || displayText(question.questionKo || question.questionText));
  return questionTitleOnly(question.listTitleEn || question.questionText || question.questionKo);
}

function detailTitle(detail) {
  if (state.lang === "ko") return questionTitleOnly(detail.listTitleKo || displayText(detail.questionKo || detail.questionText));
  return questionTitleOnly(detail.listTitleEn || detail.questionText || detail.questionKo);
}

const CHANGE_TEXT_REPLACEMENTS = [
  [/All sectors excluding Financial services/gi, "금융 서비스를 제외한 전 섹터"],
  [/Financial services/gi, "금융 서비스"],
  [/All sectors/gi, "전 섹터"],
  [/Energy utilities and power generators/gi, "에너지 유틸리티 및 발전"],
  [/Forests and Water/gi, "산림 및 수자원"],
  [/Climate Change/gi, "기후변화"],
  [/기후 변경/g, "기후변화"],
  [/portfolio/gi, "포트폴리오"],
  [/taxonomy/gi, "택소노미"],
  [/methodology/gi, "방법론"],
  [/emissions/gi, "배출량"],
  [/emission/gi, "배출량"],
  [/adaptation/gi, "적응"],
  [/mitigation/gi, "완화"],
  [/financial activities/gi, "금융 활동"],
  [/financial institutions?/gi, "금융기관"],
  [/Financial Instituations/gi, "금융기관"],
  [/fossil fuel/gi, "화석연료"],
  [/asset value/gi, "자산 가치"],
  [/total portfolio value/gi, "총 포트폴리오 가치"],
  [/questionnaire/gi, "문항"],
  [/child questions/gi, "하위 문항"],
  [/\bcolumns?\b/gi, "열"],
  [/\brows?\b/gi, "행"],
  [/\broutes?\b/gi, "경로"],
  [/\bcriteria\b/gi, "평가기준"],
  [/\bscoring\b/gi, "평가방법론"],
  [/point allocations?/gi, "배점"],
  [/accepted options/gi, "인정 선택지"],
  [/conditional logic/gi, "조건부 표시 로직"],
  [/dropdown option text/gi, "드롭다운 선택지 문구"],
  [/% of asset value aligned with a taxonomy or methodology/gi, "택소노미 또는 방법론에 부합하는 자산 가치 비율"],
  [/% of 자산 가치 aligned with a 택소노미 or 방법론/gi, "택소노미 또는 방법론에 부합하는 자산 가치 비율"],
  [/% of 포트폴리오 aligned with a 택소노미 or 방법론 in relation to total 포트폴리오 value/gi, "총 포트폴리오 가치 대비 택소노미 또는 방법론 부합 포트폴리오 비율"],
  [/Type of solution financed, invested in or insured/gi, "자금 조달/투자/보험 인수 대상 솔루션 유형"],
  [/cover adaptation solutions/gi, "적응 솔루션을 포함하기 위함"],
  [/cover 적응 solutions/gi, "적응 솔루션을 포함하기 위함"],
  [/clarify the reporting of blue hydrogen/gi, "블루수소 보고 기준을 명확히 하기 위함"],
  [/clarify how .* should report on adaptation measures and the substantial contribution to adaptation/gi, "금융기관의 적응 조치 및 적응에 대한 실질적 기여 보고 방식을 명확히 하기 위함"],
  [/clarify how 금융기관 should report on 적응 measures and the substantial contribution to 적응/gi, "금융기관의 적응 조치 및 적응에 대한 실질적 기여 보고 방식을 명확히 하기 위함"],
  [/minor clarification/gi, "경미한 명확화"],
  [/minor restructuring/gi, "경미한 구조 조정"],
  [/increase clarity/gi, "명확성을 높이기 위함"],
  [/reflect changes in the 문항/gi, "문항 변경사항 반영"],
  [/reflect changes to the 문항/gi, "문항 변경사항 반영"],
  [/in accordance with 문항 change/gi, "문항 변경사항 반영"],
  [/alignment with ISSB S2/gi, "ISSB S2와의 정합성"],
  [/scope 1, 2 and 3/gi, "Scope 1, 2, 3"],
  [/third-party verification/gi, "제3자 검증"],
  [/non-disclosure route/gi, "비공개 경로"],
  [/Best practise/gi, "우수 관행"],
  [/best practice/gi, "우수 관행"],
];

function applyChangeGlossary(value) {
  let out = String(value ?? "");
  for (const [pattern, replacement] of CHANGE_TEXT_REPLACEMENTS) out = out.replace(pattern, replacement);
  return out
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function cleanChangeFragment(value) {
  return applyChangeGlossary(value);
}

function translateChangeTypeText(value) {
  const typeMap = {
    "New dropdown option": "신규 드롭다운 선택지",
    "Modified dropdown option": "드롭다운 선택지 문구 수정",
    "Removed dropdown option": "드롭다운 선택지 삭제",
    "New row": "신규 행",
    "Removed row": "행 삭제",
    "Modified row text": "행 문구 수정",
    "Removed column/row": "열/행 삭제",
    "Removed column": "열 삭제",
    "New column": "신규 열",
    "Modified column text": "열 문구 수정",
    "Change column type": "열 입력방식 변경",
    "New guidance": "가이던스 추가",
    "Modified guidance": "가이던스 수정",
    "New explanation of terms": "용어 설명 추가",
    "Change to conditional logic": "조건부 표시 로직 변경",
    "Add tags to dropdown option": "드롭다운 선택지 태그 추가",
    "Remove tags to dropdown option": "드롭다운 선택지 태그 삭제",
    "Edit pop up help text": "팝업 도움말 수정",
  };
  const parts = String(value || "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => typeMap[part] || cleanChangeFragment(part));
  return [...new Set(parts)].join(" / ");
}

function translateQuotedTerms(value) {
  return applyChangeGlossary(value);
}

function quotedList(value) {
  const matches = [...String(value || "").matchAll(/["'‘’“”]([^"'‘’“”]+)["'‘’“”]/g)].map((match) => `"${translateQuotedTerms(match[1])}"`);
  return matches.length ? matches.join(", ") : "";
}

function sentenceParts(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .split(/\n+|(?<=\.)\s+(?=[A-Z])/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function translateChangeSentence(sentence) {
  const original = sentence.trim().replace(/\.$/, "");
  const terms = quotedList(original);
  let match;

  if ((match = original.match(/^Dropdown option\s+(.+?)\s+has been added/i))) return `드롭다운 선택지 ${quotedList(match[1]) || translateQuotedTerms(match[1])}가 추가되었습니다.`;
  if ((match = original.match(/^Option\s+(.+?)\s+has been added/i))) return `선택지 ${quotedList(match[1]) || translateQuotedTerms(match[1])}가 추가되었습니다.`;
  if ((match = original.match(/^New dropdown options added(?:\s+to\s+(.+))?/i))) return `신규 드롭다운 선택지가 추가되었습니다${match[1] ? `: ${translateQuotedTerms(match[1])}` : ""}.`;
  if ((match = original.match(/^New options added:\s*(.+)/i))) return `신규 선택지가 추가되었습니다: ${translateQuotedTerms(match[1])}.`;
  if ((match = original.match(/^Removed options:\s*(.+)/i))) return `선택지가 삭제되었습니다: ${translateQuotedTerms(match[1])}.`;
  if ((match = original.match(/^Modified options:\s*(.+)/i))) return `선택지 문구가 수정되었습니다: ${translateQuotedTerms(match[1]).replace(/\s+with\s+/gi, " → ")}.`;
  if ((match = original.match(/^Rows?\s+(.+?)\s+added/i))) return `행 ${quotedList(match[1]) || translateQuotedTerms(match[1])}이 추가되었습니다.`;
  if ((match = original.match(/^Row\s+(.+?)\s+replaced with\s+(.+)/i))) return `행 ${quotedList(match[1]) || translateQuotedTerms(match[1])}이 ${quotedList(match[2]) || translateQuotedTerms(match[2])}로 변경되었습니다.`;
  if ((match = original.match(/^Removed column\s+(.+)/i))) return `열 ${quotedList(match[1]) || translateQuotedTerms(match[1])}이 삭제되었습니다.`;
  if ((match = original.match(/^Added definition for\s+(.+)/i))) return `용어 정의가 추가되었습니다: ${translateQuotedTerms(match[1])}.`;
  if ((match = original.match(/^The term\s+(.+?)\s+has been added/i))) return `용어 ${quotedList(match[1]) || translateQuotedTerms(match[1])}가 추가되었습니다.`;
  if ((match = original.match(/^Added guidance(?:\s+to\s+(.+))?/i))) return `가이던스가 추가되었습니다${match[1] ? `: ${translateQuotedTerms(match[1])}` : ""}.`;
  if ((match = original.match(/^Additional guidance (?:has been )?added(?:\s+to\s+(.+))?/i))) return `추가 가이던스가 반영되었습니다${match[1] ? `: ${translateQuotedTerms(match[1])}` : ""}.`;
  if ((match = original.match(/^Updated guidance\s+to\s+(.+)/i))) return `가이던스가 수정되었습니다: ${translateQuotedTerms(match[1])}.`;
  if ((match = original.match(/^Conditional logic fix\s*-\s*(.+)/i))) return `조건부 표시 로직이 수정되었습니다: ${translateQuotedTerms(match[1])}.`;
  if ((match = original.match(/^Added functionality\s+to\s+(.+)/i))) return `기능이 추가되었습니다: ${translateQuotedTerms(match[1])}.`;
  if ((match = original.match(/^New rows?\s+(.+?)\s+added/i))) return `신규 행 ${quotedList(match[1]) || translateQuotedTerms(match[1])}이 추가되었습니다.`;
  if ((match = original.match(/^(.+?)\s+has been added/i))) return `${translateQuotedTerms(match[1])}이(가) 추가되었습니다.`;

  if (terms && /added/i.test(original)) return `${terms}이(가) 추가되었습니다.`;
  if (terms && /removed/i.test(original)) return `${terms}이(가) 삭제되었습니다.`;
  if (terms && /updated|modified/i.test(original)) return `${terms}이(가) 수정되었습니다.`;
  return cleanChangeFragment(original).replace(/\.$/, "") + ".";
}

function translateScoringHeader(value) {
  return cleanChangeFragment(value)
    .replace(/\bCC\/F\/W\b/g, "기후변화/산림/수자원")
    .replace(/\bCC\/W\b/g, "기후변화/수자원")
    .replace(/\bF\/W\b/g, "산림/수자원")
    .replace(/\bCC\b/g, "기후변화")
    .replace(/All sectors excluding Financial services/gi, "금융 서비스를 제외한 전 섹터")
    .replace(/All sectors/gi, "전 섹터")
    .replace(/Financial services/gi, "금융 서비스")
    .replace(/Energy utilities and power generators/gi, "에너지 유틸리티 및 발전")
    .replace(/Disclosure & Awareness/gi, "공시 및 인지")
    .replace(/Awareness, Management & Leadership/gi, "인지, 관리 및 리더십")
    .replace(/Awareness & Management/gi, "인지 및 관리")
    .replace(/Management & Leadership/gi, "관리 및 리더십")
    .replace(/Disclosure/gi, "공시")
    .replace(/Awareness/gi, "인지")
    .replace(/Management/gi, "관리")
    .replace(/Leadership/gi, "리더십");
}

function translateScoringSentence(sentence) {
  const original = sentence.trim().replace(/\.$/, "");
  let match;
  if (/^NON-DISCLOSURE ROUTE point allocations updated/i.test(original)) return "비공개 경로 배점이 조정되었습니다.";
  if (/^Point allocations updated to reflect changes in child questions/i.test(original)) return "하위 문항 변경사항을 반영하여 배점이 조정되었습니다.";
  if (/reflect additional power generation sources added to question/i.test(original)) {
    return "문항에 신규 추가된 발전원과 삭제된 발전원을 평가방법론에 반영했습니다: Ocean thermal, Onshore wind, Offshore wind, Wave & Tidal 추가; Wind, Marine 삭제.";
  }
  if (/provide a scoring pathway.*scope 1, 2 and 3 emissions/i.test(original)) {
    return "Scope 1, 2, 3 배출량을 검증했지만 기타 환경정보를 검증하지 않은 조직도 평가받을 수 있도록 경로가 추가되었습니다.";
  }
  if (/^Best practise for addressing Climate- related issues/i.test(original)) return "기후 관련 이슈 대응 우수 관행은 Scope 1, 2, 3 배출량에 대해 제3자 검증을 확보하는 것입니다.";
  if (/^Therefore, while it is good practise/i.test(original)) return "따라서 Scope 1, 2, 3을 모두 검증한 조직은 기타 환경정보를 검증하지 않았다는 이유만으로 감점되지 않습니다.";
  if (/create a route for asset owners where they do not have clients/i.test(original)) return "고객이 없는 자산소유자를 위한 평가 경로가 마련되었습니다.";
  if (/When .*Investing \(asset Owner\).*selected in column .*Portfolio/i.test(original)) return "포트폴리오 열에서 'Investing (asset Owner)'가 선택된 경우 해당 행은 평가에서 제외됩니다.";
  if (/^Minor clarification to dropdown option text/i.test(original)) return "문항 변경사항에 맞춰 드롭다운 선택지 문구가 경미하게 명확화되었습니다.";
  if (/^Minor restructuring of criteria to increase clarity/i.test(original)) return "평가기준의 명확성을 높이기 위해 일부 구조가 조정되었습니다.";
  if (/^Update in accordance with questionnaire change/i.test(original)) return "문항 변경사항을 반영한 업데이트입니다.";
  if (/^Removal of column/i.test(original)) return `열 삭제사항이 평가방법론에 반영되었습니다: ${translateQuotedTerms(original.replace(/^Removal of column/i, ""))}.`;
  if (/^Scoring updated for alignment of Forests and Water scoring with Climate Change/i.test(original)) return "산림 및 수자원 평가방법론을 기후변화 평가방법론과 정합화하도록 수정했습니다.";
  if (/^Additionally, updates have been made to create a route for asset owners/i.test(original)) return "고객이 없는 자산소유자에게 적용할 평가 경로가 추가되었습니다.";
  if (/^This checks that at least one row disclosed/i.test(original)) return "1.10에서 선택한 포트폴리오 항목과 대응되는 행이 최소 1개 공시되었는지 확인합니다.";
  if (/^When .*selected in column/i.test(original)) return `특정 선택지가 선택된 경우의 평가 적용 방식이 조정되었습니다: ${translateQuotedTerms(original)}.`;
  if (/^Driven by/i.test(original)) return `변경 사유: ${translateQuotedTerms(original.replace(/^Driven by/i, ""))}.`;
  if (/^Best practise/i.test(original) || /^Therefore/i.test(original)) return translateQuotedTerms(original) + ".";
  if (/^Removed/i.test(original)) return "문항 업데이트에 따라 해당 평가기준이 삭제되었습니다.";
  if ((match = original.match(/Point allocation increased from\s+(.+?)\s+to\s+(.+?)\s+to\s+(.+)/i))) {
    return `배점이 ${match[1]}에서 ${match[2]}로 증가했습니다: ${translateQuotedTerms(match[3])}.`;
  }
  if ((match = original.match(/ROUTE\s+([A-Z])\s+added(?:\s+to\s+(.+))?/i))) return `경로 ${match[1]}가 추가되었습니다${match[2] ? `: ${translateQuotedTerms(match[2])}` : ""}.`;
  if ((match = original.match(/ROUTE\s+([A-Z])\s+updated(?:\s+to\s+(.+))?/i))) return `경로 ${match[1]}가 수정되었습니다${match[2] ? `: ${translateQuotedTerms(match[2])}` : ""}.`;
  if ((match = original.match(/Scoring added(?:\s+for\s+(.+))?/i))) return `평가기준이 추가되었습니다${match[1] ? `: ${translateQuotedTerms(match[1])}` : ""}.`;
  if ((match = original.match(/Scoring update(?:d)?\s+to\s+(.+)/i))) return `평가방법론이 수정되었습니다: ${translateQuotedTerms(match[1])}.`;
  if ((match = original.match(/Scoring relating to column\s+(.+?)\s+is no longer present/i))) return `열 ${quotedList(match[1]) || translateQuotedTerms(match[1])} 관련 평가기준이 삭제되었습니다.`;
  if ((match = original.match(/Column\s+(.+?)\s+which was previously excluded.*now scored/i))) return `기존에 제외되었던 열 ${quotedList(match[1]) || translateQuotedTerms(match[1])}이 평가 대상에 포함되었습니다.`;
  if ((match = original.match(/Accepted options in column\s+(.+?)\s+increased/i))) return `열 ${quotedList(match[1]) || translateQuotedTerms(match[1])}의 인정 선택지가 확대되었습니다.`;
  if ((match = original.match(/Check for a figure greater than\s+(.+?)\s+provided in column\s+(.+?)\s+added/i))) return `열 ${quotedList(match[2]) || translateQuotedTerms(match[2])}에 ${match[1]}보다 큰 값이 입력됐는지 확인하는 기준이 추가되었습니다.`;
  if ((match = original.match(/Additional check added(?:\s+to\s+(.+))?/i))) return `추가 확인 기준이 추가되었습니다${match[1] ? `: ${translateQuotedTerms(match[1])}` : ""}.`;
  if ((match = original.match(/^Cross check with\s+(.+?)\s+added/i))) return `${match[1]} 문항과의 교차검증이 추가되었습니다.`;
  if (/Cross check with/i.test(original)) return `${translateQuotedTerms(original).replace(/Cross check with/gi, "교차검증 대상")}이 추가되었습니다.`;
  if (/Figure check moved to awareness level/i.test(original)) return "수치 확인 기준이 인지 수준으로 이동했습니다.";
  if (/Eligibility criteria/i.test(original)) return `평가 적용 또는 적격성 기준이 변경되었습니다: ${translateQuotedTerms(original)}.`;
  if (/Criteria modified/i.test(original)) return `평가기준이 수정되었습니다: ${translateQuotedTerms(original)}.`;
  return translateChangeSentence(original);
}

function translateChangeSource(value, kind) {
  const source = String(value || "").trim();
  if (!source) return "";
  if (kind === "type") return translateChangeTypeText(source);

  const paragraphs = source.split(/\n+/).map((part) => part.trim()).filter(Boolean);
  const translated = [];
  for (const paragraph of paragraphs) {
    if (kind === "scoring" && paragraph.includes("•")) {
      const [header, ...bodyParts] = paragraph.split("•").map((part) => part.trim()).filter(Boolean);
      if (header) translated.push(`• ${translateScoringHeader(header)}:`);
      for (const body of bodyParts) {
        for (const sentence of sentenceParts(body)) translated.push(`  - ${translateScoringSentence(sentence)}`);
      }
    } else {
      const parts = sentenceParts(paragraph);
      for (const part of parts) translated.push(`• ${kind === "scoring" ? translateScoringSentence(part) : translateChangeSentence(part)}`);
    }
  }
  return translated.join("\n");
}

function isGenericChangeText(value) {
  const text = String(value ?? "").trim();
  return (
    !text ||
    text === "-" ||
    text.includes("이 섹션은 문항 응답에 필요한 추가 작성 기준") ||
    text.includes("응답방법과 선택지를 함께 확인")
  );
}

function isUntranslatedKoreanChangeText(value) {
  const text = String(value ?? "").trim();
  return Boolean(text && !/[가-힣]/.test(text) && /[A-Za-z]{3,}/.test(text));
}

function changeFlagLabels(change) {
  const labels = state.lang === "ko"
    ? [
        ["문항명", change.changed_question],
        ["응답방법", change.changed_response],
        ["드롭다운/선택지", change.changed_options],
        ["가이던스", change.changed_guidance],
        ["평가방법론", change.changed_scoring],
      ]
    : [
        ["Question title", change.changed_question],
        ["Response method", change.changed_response],
        ["Dropdown/options", change.changed_options],
        ["Guidance", change.changed_guidance],
        ["Scoring methodology", change.changed_scoring],
      ];
  return labels.filter(([, active]) => active).map(([label]) => label);
}

function sentenceJoin(parts) {
  return parts.filter(Boolean).join(state.lang === "ko" ? " " : " ");
}

function summarizeScoringChange(change) {
  const source = String(change.scoring_change_summary || change.scoring_change_summaryKo || "").toLowerCase();
  if (!change.changed_scoring) {
    return state.lang === "ko" ? "평가방법론 변경은 확인되지 않았습니다." : "No scoring methodology change was identified.";
  }
  if (state.lang !== "ko") {
    return change.scoring_change_summary || "Scoring methodology was updated for the 2026 questionnaire.";
  }

  const parts = [];
  if (source.includes("non-disclosure route")) parts.push("비공개 경로 배점이 조정되었습니다.");
  if (source.includes("point allocation")) parts.push("D/A/M/L 배점이 2026 기준에 맞춰 조정되었습니다.");
  if (source.includes("child question")) parts.push("하위 문항 변경사항이 평가 배점에 반영되었습니다.");
  if (source.includes("eligibility")) parts.push("평가 적용 또는 적격성 기준이 변경되었습니다.");
  if (source.includes("criteria")) parts.push("평가기준 문구 또는 판단 기준이 조정되었습니다.");
  return parts.length ? sentenceJoin(parts) : "평가방법론 또는 배점 기준이 2026 문항 구조에 맞춰 변경되었습니다.";
}

function summarizeGeneralChange(change) {
  const active = changeFlagLabels(change);
  if (!active.length) {
    return state.lang === "ko"
      ? "2026 원문 확인 결과 주요 변경사항은 확인되지 않았습니다."
      : "No major changes were identified in the 2026 source.";
  }
  if (state.lang !== "ko") {
    return `${active.join(", ")} changed.`;
  }
  if (active.length === 1) {
    const particle = ["문항명", "응답방법", "가이던스", "평가방법론"].includes(active[0]) ? "이" : "가";
    return `${active[0]}${particle} 변경되었습니다.`;
  }
  return `${active.join(", ")} 항목이 변경되었습니다.`;
}

function conciseKoreanChangeSummary(change) {
  const source = String(change?.change_summary || change?.change_summaryKo || "");
  const lines = [];
  const add = (text) => {
    if (text && !lines.includes(text)) lines.push(text);
  };

  if (!changeFlagLabels(change).length) add("2025년과 동일합니다.");
  if (/ocean|해양/i.test(source)) add("해양 관련 신규 행 또는 문항이 추가되었습니다.");
  if (/new question/i.test(source)) add("신규 문항이 추가되었습니다.");
  if (/row/i.test(source) && /add/i.test(source)) add("응답 표에 신규 행이 추가되었습니다.");
  if (/column/i.test(source) && /add/i.test(source)) add("응답 표에 신규 열이 추가되었습니다.");
  if (/column/i.test(source) && /remov/i.test(source)) add("응답 표의 일부 열이 삭제되었습니다.");
  if (/new dropdown|dropdowns? added|신규 드롭다운/i.test(source)) add("드롭다운 선택지가 추가되었습니다.");
  if (/modified dropdown|dropdown option text|드롭다운 선택지 문구/i.test(source)) add("기존 드롭다운 선택지 문구가 수정되었습니다.");
  if (/tag/i.test(source)) add("드롭다운 선택지 태그 또는 적용 조건이 조정되었습니다.");
  if (/conditional logic|조건부/i.test(source)) add("조건부 표시 로직이 변경되었습니다.");
  if (/guidance|가이던스|explanation of terms|terms/i.test(source)) add("작성 가이던스 또는 용어 설명이 추가/수정되었습니다.");
  if (/functionality|stop selection|contradictory datapoints/i.test(source)) add("상충되는 데이터포인트 선택을 방지하는 기능이 추가되었습니다.");

  if (change?.changed_question) add("문항명이 2026 원문 기준으로 변경되었습니다.");
  if (change?.changed_response) add("응답 방식, 열/행 구조 또는 입력 조건이 변경되었습니다.");
  if (change?.changed_options) add("드롭다운/응답 선택지가 변경되었습니다.");
  if (change?.changed_guidance) add("작성 안내 또는 가이던스가 변경되었습니다.");
  if (change?.changed_scoring) add("평가방법론 또는 배점 기준이 변경되었습니다.");

  return lines.map((line) => `• ${line}`).join("\n");
}

function changeDisplayValue(change, enKey, koKey, kind) {
  const preferred = state.lang === "ko" ? change[koKey] : change[enKey];
  const alternate = state.lang === "ko" ? change[enKey] : change[koKey];
  if (state.lang === "ko" && kind === "summary") return conciseKoreanChangeSummary(change);
  if (state.lang === "ko" && change[enKey]) {
    const translated = translateChangeSource(change[enKey], kind);
    if (translated) return translated;
  }
  const preferredUsable = !isGenericChangeText(preferred) && !(state.lang === "ko" && isUntranslatedKoreanChangeText(preferred));
  if (preferredUsable) return state.lang === "ko" ? displayText(preferred) : preferred;

  if (kind === "type") {
    const active = changeFlagLabels(change);
    if (active.length) return active.join(state.lang === "ko" ? " / " : " / ");
    return state.lang === "ko" ? "변경 없음" : "No change";
  }
  if (kind === "scoring") return summarizeScoringChange(change);
  return summarizeGeneralChange(change);
}

function changeStatusDisplay(change) {
  const ko = change?.change_statusKo || "";
  if (state.lang === "ko" && !isGenericChangeText(ko) && !isUntranslatedKoreanChangeText(ko)) return displayText(ko);
  const status = String(change?.change_status || "").trim();
  const mapKo = {
    "No change": "변경 없음",
    "No change - 2026 source verified": "변경 없음 - 2026 원문 확인",
    "Modified question": "문항 수정",
    "New question": "신규 문항",
    "Removed question": "삭제된 문항",
    "Minor change": "경미한 변경",
    "Major change": "주요 변경",
  };
  if (state.lang === "ko") return mapKo[status] || summarizeGeneralChange(change);
  return status || summarizeGeneralChange(change);
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
    questionListTitle(question),
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
  if (state.lang !== "ko") return item[enKey] || "";
  const exact = exactFieldTranslation(item[enKey]);
  if (exact) return exact;
  const koValue = normalizeFieldKorean(displayText(item[koKey] || ""), item[enKey]);
  if (!isPoorKoreanText(koValue)) return koValue;
  return normalizeFieldKorean(displayText(item[enKey] || koValue || ""), item[enKey]);
}

function optionText(original, translated) {
  if (state.lang !== "ko") return original || "";
  const exact = exactFieldTranslation(original);
  if (exact) return exact;
  const koValue = normalizeFieldKorean(displayText(translated || ""), original);
  if (!isPoorKoreanText(koValue)) return koValue;
  return normalizeFieldKorean(displayText(original || koValue || ""), original);
}

const KO_FIELD_EXACT = new Map(
  Object.entries({
    "SINGLE_SELECT": "단일 선택",
    "MULTI_SELECT": "복수 선택",
    "GROUPED_OPTIONS": "그룹형 선택",
    "RICH_TEXT": "서술형 입력",
    "NUMERIC": "숫자 입력",
    "DATE": "날짜 입력",
    "ATTACHMENT": "파일 첨부",
    "MATRIX": "표 형식 응답",
    "Yes": "예",
    "No": "아니요",
    "Other, please specify": "기타, 직접 입력",
    "More frequently than quarterly": "분기별 1회 초과",
    "Quarterly": "분기별",
    "Half-yearly": "반기별",
    "Annually": "연간",
    "Less frequently than annually": "연간 1회 미만",
    "As important matters arise": "중요 이슈 발생 시",
    "Board of directors or equivalent governing body": "이사회 또는 이에 상응하는 감독기구",
    "Frequency with which the board or equivalent meets": "이사회 또는 이에 상응하는 감독기구의 회의 빈도",
    "Types of directors your board or equivalent is comprised of": "이사회 또는 이에 상응하는 감독기구의 구성",
    "Board diversity and inclusion policy": "이사회의 다양성 및 포용 정책 유무",
    "Briefly describe what the policy covers": "정책 적용 대상 설명",
    "Attach the policy (optional)": "정책 첨부 (선택 사항)",
    "Executive directors or equivalent": "상임이사 또는 이에 상응하는 직책",
    "Non-executive directors or equivalent": "비상임이사 또는 이에 상응하는 직책",
    "Independent non-executive directors or equivalent": "독립적인 사외이사 또는 이에 상응하는 직책",
    "Yes, and it is publicly available": "예, 정책 공개됨",
    "Yes, but it is not publicly available": "예, 하지만 정책은 비공개",
    "Environmental issue": "환경이슈",
    "Board-level oversight of this environmental issue": "환경이슈에 대한 이사회 수준의 감독기구 유무",
    "Primary reason for no board-level oversight of this environmental issue": "환경이슈에 대한 이사회 수준의 감독기구가 없는 주된 이유",
    "Explain why your organization does not have board-level oversight of this environmental issue": "환경이슈에 대한 이사회 수준의 감독기구가 없는 이유 설명",
    "Positions' accountability for this environmental issue is outlined in policies applicable to the board": "이 환경이슈에 대한 직책별 책임이 이사회 적용 정책에 명시되어 있음",
    "Policies which outline the positions' accountability for this environmental issue": "이 환경이슈에 대한 직책별 책임을 명시한 정책",
    "Governance mechanisms into which this environmental issue is integrated": "이 환경이슈가 통합된 거버넌스 메커니즘",
    "Scope of board-level oversight": "이사회 수준 감독 범위",
    "Board chair": "이사회 의장",
    "Director on board": "이사회 이사",
    "Chief Executive Officer (CEO)": "최고경영자(CEO)",
    "Chief Financial Officer (CFO)": "최고재무책임자(CFO)",
    "Chief Operating Officer (COO)": "최고운영책임자(COO)",
    "Chief Procurement Officer (CPO)": "최고구매책임자(CPO)",
    "Chief Risk Officer (CRO)": "최고리스크책임자(CRO)",
    "Chief Sustainability Officer (CSO)": "최고지속가능경영책임자(CSO)",
    "Chief Investment Officer (CIO)": "최고투자책임자(CIO)",
    "Chief Credit Officer (CCO)": "최고여신책임자(CCO)",
    "Chief Underwriting Officer (CUO)": "최고언더라이팅책임자(CUO)",
    "Chief Government Relations Officer (CGRO)": "최고대관책임자(CGRO)",
    "Chief Technology Officer (CTO)": "최고기술책임자(CTO)",
    "Other C-Suite Officer": "기타 C-suite 임원",
    "Board-level committee": "이사회 산하 위원회",
    "President": "대표이사/사장",
    "General Counsel": "법무총괄",
    "Board Terms of Reference": "이사회 운영규정",
    "Board mandate": "이사회 권한 규정",
    "Individual role descriptions": "개별 직무기술서",
    "Other policy applicable to the board, please specify": "이사회에 적용되는 기타 정책, 직접 입력",
    "Scheduled agenda item in every board meeting (standing agenda item)": "모든 이사회 회의의 정기 안건(상설 안건)",
    "Scheduled agenda item in every board meeting (less than annually) and in board-level committee meetings (at least annually)": "모든 이사회 회의(연 1회 미만) 및 이사회 산하 위원회 회의(최소 연 1회)의 정기 안건",
    "Scheduled agenda item in some board meetings - at least annually": "일부 이사회 회의의 정기 안건 - 최소 연 1회",
    "Scheduled agenda item in some board meetings - less than annually": "일부 이사회 회의의 정기 안건 - 연 1회 미만",
    "Sporadic - agenda item as important matters arise": "비정기 - 중요 사안 발생 시 안건으로 상정",
    "Overseeing and guiding scenario analysis": "시나리오 분석 감독 및 지침 제공",
    "Reviewing and guiding the assessment process for dependencies, impacts, risks, and opportunities": "의존성, 영향, 리스크 및 기회 평가 프로세스 검토 및 지침 제공",
    "Overseeing reporting, audit, and verification processes": "보고, 감사 및 검증 프로세스 감독",
    "Approving corporate policies and/or commitments": "기업 정책 및/또는 공약 승인",
    "Monitoring compliance with corporate policies and/or commitments": "기업 정책 및/또는 공약 준수 모니터링",
    "Overseeing the setting of corporate targets": "기업 목표 설정 감독",
    "Monitoring progress towards corporate targets": "기업 목표 달성 진행상황 모니터링",
    "Monitoring supplier compliance with organizational requirements": "공급업체의 조직 요구사항 준수 모니터링",
    "Overseeing and guiding public policy engagement": "공공정책 참여 감독 및 지침 제공",
    "Overseeing and guiding value chain engagement": "가치사슬 참여 감독 및 지침 제공",
    "Overseeing and guiding the development of a climate transition plan": "기후전환계획 수립 감독 및 지침 제공",
    "Monitoring the implementation of a climate transition plan": "기후전환계획 이행 모니터링",
    "Overseeing and guiding the development of a business strategy": "사업전략 수립 감독 및 지침 제공",
    "Monitoring the implementation of the business strategy": "사업전략 이행 모니터링",
    "Overseeing and guiding acquisitions, mergers, and divestitures": "인수, 합병 및 매각 감독 및 지침 제공",
    "Overseeing and guiding major capital expenditures": "주요 자본지출 감독 및 지침 제공",
    "Reviewing and guiding annual budgets": "연간 예산 검토 및 지침 제공",
    "Reviewing and guiding innovation/R&D priorities": "혁신/R&D 우선순위 검토 및 지침 제공",
    "Approving and/or overseeing employee incentives": "임직원 인센티브 승인 및/또는 감독",
    "Risks and opportunities to our own operations": "당사 직접 운영사업장의 리스크 및 기회",
    "Risks and opportunities to our banking activities": "당사 은행 활동의 리스크 및 기회",
    "Risks and opportunities to our investment activities": "당사 투자 활동의 리스크 및 기회",
    "Risks and opportunities to our insurance underwriting activities": "당사 보험 인수 활동의 리스크 및 기회",
    "The impact of our own operations on the environment": "당사 직접 운영사업장이 환경에 미치는 영향",
    "The impact of our banking activities on the environment": "당사 은행 활동이 환경에 미치는 영향",
    "The impact of our investing activities on the environment": "당사 투자 활동이 환경에 미치는 영향",
    "The impact of our insurance underwriting activities on the environment": "당사 보험 인수 활동이 환경에 미치는 영향",
    "No, but we plan to within the next two years": "아니요, 하지만 2년 이내 구성할 계획",
    "No, and we do not plan to within the next two years": "아니요, 향후 2년 안에 구성할 계획 없음",
    "Lack of internal resources, capabilities, or expertise (e.g., due to organization size)": "내부 자원, 역량 또는 전문성 부족(예: 조직 규모에 따라 다름)",
    "No standardized procedure": "표준화된 절차 부재",
    "Not an immediate strategic priority": "전략적 최우선 순위가 아님",
    "Judged to be unimportant or not relevant": "중요하지 않거나 관련 없다고 판단함",
    "Is your reporting boundary for your CDP disclosure the same as that used in your financial statements?": "귀사의 CDP 공시 보고경계는 재무제표에 사용된 보고경계와 동일합니까?",
    "Have you validated your process for SBTN Step 1 ‘Assess'?": "SBTN 1단계 '평가' 프로세스를 검증했습니까?",
    "Have you validated your process for SBTN Step 1 'Assess'?": "SBTN 1단계 '평가' 프로세스를 검증했습니까?",
    "Are you able to quantify the financial effects of the opportunity?": "해당 기회의 재무적 영향을 정량화할 수 있습니까?",
    "Are you a signatory or member of any environmental collaborative frameworks or initiatives?": "귀사는 환경 관련 협력 프레임워크 또는 이니셔티브의 서명기관 또는 회원입니까?",
    "Is your publication in line with a standard or framework?": "귀사의 공시자료는 기준 또는 프레임워크에 부합합니까?",
    "Which of the following has been impacted?": "다음 중 어떤 항목이 영향을 받았습니까?",
    "Climate change": "기후변화",
    "Forests": "산림",
    "Water": "물",
    "Ocean": "해양",
    "Biodiversity": "생물다양성",
    "Plastics": "플라스틱",
  }),
);

const KO_STANDARD_EXACT = new Map(
  Object.entries({
    "English": "영어",
    "Latin American Spanish": "라틴 아메리카 스페인어",
    "Brazilian Portuguese": "브라질 포르투갈어",
    "Japanese": "일본어",
    "Chinese": "중국어",
    "Engagement": "참여",
    "Compliance, monitoring and targets": "준법·모니터링·목표",
    "Infrastructure, technology and spending": "인프라·기술·투자",
    "Infrastructure": "인프라",
    "Technology": "기술",
    "Nature-based solutions": "자연기반해법",
    "Nature based solutions, restoration and conservation": "자연기반해법·복원·보전",
    "Policies and plans": "정책 및 계획",
    "Governance": "거버넌스",
    "Strategy": "전략",
    "Markets": "시장",
    "Reputation": "평판",
    "Liability": "법적 책임",
    "Acute physical": "급성 물리적 리스크",
    "Chronic physical": "만성 물리적 리스크",
    "Policy": "정책",
    "Assets": "자산",
    "Liabilities": "부채",
    "Revenue": "매출",
    "Risks": "리스크",
    "Risks only": "리스크만",
    "Opportunities": "기회",
    "Opportunities only": "기회만",
    "Both risks and opportunities": "리스크 및 기회 모두",
    "Both dependencies and impacts": "의존성 및 영향 모두",
    "Dependencies only": "의존성만",
    "Impacts only": "영향만",
    "Direct operations": "직접 운영사업장",
    "Upstream": "업스트림",
    "Midstream": "미드스트림",
    "Downstream": "다운스트림",
    "Upstream value chain": "업스트림 가치사슬",
    "Downstream value chain": "다운스트림 가치사슬",
    "Upstream/downstream value chain": "업스트림/다운스트림 가치사슬",
    "Portfolio": "포트폴리오",
    "Portfolio value": "포트폴리오 가치",
    "Yes, both in direct operations and upstream/downstream value chain": "예, 직접 운영사업장 및 업스트림/다운스트림 가치사슬 모두",
    "Yes, only within our direct operations": "예, 직접 운영사업장만",
    "Yes, only in our upstream/downstream value chain": "예, 업스트림/다운스트림 가치사슬만",
    "Yes, only in our portfolio": "예, 포트폴리오만",
    "Yes, both within our direct operations or upstream value chain, and within our portfolio": "예, 직접 운영사업장 또는 업스트림 가치사슬 및 포트폴리오 모두",
    "Yes, only within our direct operations or upstream value chain": "예, 직접 운영사업장 또는 업스트림 가치사슬만",
    "Yes, we have identified opportunities, and some/all are being realized": "예, 기회를 식별했으며 일부 또는 전부를 실현 중입니다",
    "Yes, we have a public commitment or position statement in line with global environmental treaties or policy goals": "예, 글로벌 환경 협약 또는 정책 목표에 부합하는 공개 약속 또는 입장문이 있습니다",
    "Align organization’s public policy engagement with its environmental strategy": "조직의 공공정책 참여 활동을 환경전략과 연계",
    "Align organization's public policy engagement with its environmental strategy": "조직의 공공정책 참여 활동을 환경전략과 연계",
    "Engage with customers": "고객과 참여",
    "Engage with local communities": "지역사회와 참여",
    "Engage with NGOs/special interest groups": "NGO/특수 이해관계자 그룹과 참여",
    "Engage with regulators/policy makers": "규제기관/정책입안자와 참여",
    "Engage with River Basin Organizations": "유역 단위 조직과 참여",
    "Engage with suppliers": "공급업체와 참여",
    "Engage with trade unions": "노동조합과 참여",
    "Introduce/strengthen environmental incentives": "환경 인센티브 도입/강화",
    "Other engagement, please specify": "기타 참여, 직접 입력",
    "Ensure no deforestation and no conversion in own operations": "자체 운영에서 산림전용 및 전환 방지 보장",
    "Establish organization-wide targets": "조직 전반 목표 수립",
    "Establish site-specific targets": "사업장별 목표 수립",
    "Greater compliance with regulatory requirements": "규제 요구사항 준수 강화",
    "Greater due diligence": "실사 강화",
    "Greater traceability of commodities": "원자재 추적성 강화",
    "Implementation of environmental best practices in direct operations": "직접 운영사업장에 환경 모범관행 적용",
    "Improve monitoring of direct operations": "직접 운영사업장 모니터링 개선",
    "Improve monitoring of upstream activities": "업스트림 활동 모니터링 개선",
    "Improve monitoring of downstream activities": "다운스트림 활동 모니터링 개선",
    "Improve monitoring of upstream and downstream activities": "업스트림 및 다운스트림 활동 모니터링 개선",
    "New or tighter supplier performance standards": "신규 또는 강화된 공급업체 성과 기준",
    "Take action to move from single-use plastic products/packaging towards reuse models": "일회용 플라스틱 제품/포장에서 재사용 모델로 전환 조치",
    "Take action to reduce microplastic emissions": "미세플라스틱 배출 저감 조치",
    "Take action to remove single-use plastic products/packaging": "일회용 플라스틱 제품/포장 제거 조치",
    "Take action to switch to plastic which is recyclable in practice and at scale": "실질적·대규모 재활용이 가능한 플라스틱으로 전환 조치",
    "Take action to recycled content to reduce virgin plastic": "버진 플라스틱 저감을 위한 재생원료 함량 확대 조치",
    "Take action to switch to recycled content to reduce virgin plastic": "버진 플라스틱 저감을 위해 재생원료 함량으로 전환 조치",
    "Take action to switch to technically recyclable plastic": "기술적으로 재활용 가능한 플라스틱으로 전환 조치",
    "Utilize aquifer storage to accrue recharge credits": "대수층 저장을 활용하여 함양 크레딧 확보",
    "Conservation": "보전",
    "Biodiversity offsetting": "생물다양성 상쇄",
    "Engage in support landscape jurisdictional initiatives": "경관/관할권 이니셔티브 지원 참여",
    "Implement ecosystem restoration": "생태계 복원 실행",
    "Implement nature-based solutions": "자연기반해법 실행",
    "Promotion of sustainable forest management": "지속가능한 산림관리 촉진",
    "Support Fishery Improvement Project (FIP) or Aquaculture Improvement Project (AIP)": "어업 개선 프로젝트(FIP) 또는 양식 개선 프로젝트(AIP) 지원",
    "Support Fishery Improvement Project (FIP) and/or Aquaculture Improvement Project (AIP)": "어업 개선 프로젝트(FIP) 및/또는 양식 개선 프로젝트(AIP) 지원",
    "Support river basin restoration": "유역 복원 지원",
    "Voluntary engagement in conservation projects": "보전 프로젝트 자발적 참여",
    "Voluntary engagement in conservation projects (including reforestation, afforestation and ecosystem restoration)": "보전 프로젝트 자발적 참여(재조림, 조림 및 생태계 복원 포함)",
    "Other nature-based solution, restoration and conservation, please specify": "기타 자연기반해법·복원·보전, 직접 입력",
    "Adopt regenerative agriculture policies": "재생농업 정책 채택",
    "Amend the Business Continuity Plan": "사업연속성계획 개정",
    "Consider relevant transboundary water policies or agreements at national, bilateral or regional level": "국가·양자·지역 단위의 관련 초국경 수자원 정책 또는 협정 고려",
    "Consider relevant transboundary water policies and agreements at national, bilateral or regional level": "국가·양자·지역 단위의 관련 초국경 수자원 정책 및 협정 고려",
    "Develop a circular economy plan": "순환경제 계획 수립",
    "Develop a climate transition plan": "기후전환계획 수립",
    "Develop a plan to reduce macro and microplastic leakage": "대형 및 미세 플라스틱 누출 저감 계획 수립",
    "Develop drought emergency plans": "가뭄 비상계획 수립",
    "Develop flood emergency plans": "홍수 비상계획 수립",
    "Improve alignment of public policy influencing activity with environmental commitments": "공공정책 영향 활동을 환경 관련 약속과 정합성 있게 개선",
    "Agricultural practices": "농업 관행",
    "Adopt alternative crop management strategies to reduce fertilizer and pesticide use": "비료 및 농약 사용 저감을 위한 대체 작물 관리 전략 도입",
    "Adopt alternative livestock management practices": "대체 축산 관리 관행 도입",
    "Adopt better animal waste management practices": "가축분뇨 관리 관행 개선",
    "Adopt sustainable irrigation practices": "지속가능한 관개 관행 도입",
    "Avoid sourcing from jurisdictions with a high risk of deforestation and conversion of other natural ecosystems": "산림전용 및 기타 자연 생태계 전환 위험이 높은 관할지역에서의 조달 회피",
    "Improve soil health": "토양 건강 개선",
    "Reduce food waste throughout the value chain": "가치사슬 전반의 식품 폐기물 저감",
    "Species management and/or recovery": "종 관리 및/또는 복원",
    "Use drought resistant crop varieties": "가뭄 저항성 작물 품종 사용",
    "Other agricultural practice, please specify": "기타 농업 관행, 직접 입력",
    "Diversification": "다변화",
    "Develop new products, services and/or markets": "신규 제품, 서비스 및/또는 시장 개발",
    "Improve emergency response systems in sourcing regions": "조달 지역의 비상대응 체계 개선",
    "Improve fire management systems in sourcing regions": "조달 지역의 화재 관리 체계 개선",
    "Increase supplier diversification": "공급업체 다변화 확대",
    "Market expansion": "시장 확대",
    "Marketing campaign[s]": "마케팅 캠페인",
    "Other diversification, please specify": "기타 다변화, 직접 입력",
    "Engage in multi-stakeholder initiatives": "다중 이해관계자 이니셔티브 참여",
    "Ensure grievance mechanisms are available to relevant stakeholders": "관련 이해관계자가 이용 가능한 고충처리 메커니즘 보장",
    "Promotion of best practice and awareness in the value chain": "가치사슬 내 모범관행 및 인식 제고",
    "Promotion of certification, including financial incentives": "인증 촉진(재정적 인센티브 포함)",
    "Other compliance, monitoring or target, please specify": "기타 준법·모니터링·목표, 직접 입력",
    "Adopt water efficiency, water reuse, recycling and conservation practices": "물 효율, 물 재사용, 재활용 및 보전 관행 도입",
    "Establish and improve end-of-life infrastructure and/or technology": "수명 종료 단계 인프라 및/또는 기술 구축·개선",
    "Implementing buffer stocks or dual sourcing": "완충 재고 또는 이중 조달 실행",
    "Improve maintenance of infrastructure": "인프라 유지관리 개선",
    "Improve pollution abatement and control measures": "오염 저감 및 관리 조치 개선",
    "Increase environment-related capital expenditure": "환경 관련 자본지출 확대",
    "Increase geographic diversity of facilities": "시설의 지리적 다양성 확대",
    "Increase investment in R&D": "R&D 투자 확대",
    "Increase investment in water, sanitation and hygiene [WASH]": "물·위생·보건(WASH) 투자 확대",
    "Secure alternative water supply": "대체 수자원 확보",
    "Other infrastructure, technology and spending, please specify": "기타 인프라·기술·투자, 직접 입력",
    "Engage and support landscape and jurisdictional initiatives": "경관 및 관할권 이니셔티브 참여·지원",
    "Implement ecosystem restoration and long-term protection": "생태계 복원 및 장기 보호 실행",
    "Promotion of sustainable forest management, including financial incentives": "지속가능한 산림관리 촉진(재정적 인센티브 포함)",
    "Support river basin restoration and other initiatives": "유역 복원 및 기타 이니셔티브 지원",
    "Increased use of sustainably sourced materials": "지속가능하게 조달된 원재료 사용 확대",
    "Increase insurance coverage": "보험 보장 범위 확대",
    "More ambitious environmental commitments and policies": "더 적극적인 환경 관련 약속 및 정책 수립",
    "More ambitious no-conversion commitments and policies": "더 적극적인 전환 금지 약속 및 정책 수립",
    "More ambitious policies and commitments to protect natural ecosystems": "자연 생태계 보호를 위한 더 적극적인 정책 및 약속 수립",
    "Participation in environmental collaborative industry frameworks, initiatives and/or commitments": "환경 관련 산업 공동 프레임워크, 이니셔티브 및/또는 약속 참여",
    "Use risk transfer instruments": "리스크 이전 수단 활용",
    "Other policies or plans, please specify": "기타 정책 또는 계획, 직접 입력",
    "Pricing and credits": "가격제 및 크레딧",
    "Implement internal price on carbon": "내부 탄소가격제 시행",
    "Implement internal price on water": "내부 물 가격제 시행",
    "Increase internal price on carbon": "내부 탄소가격 인상",
    "Increase internal price on water": "내부 물 가격 인상",
    "Purchase water quality credits": "수질 크레딧 구매",
    "Promotion/purchase of carbon credits": "탄소 크레딧 촉진/구매",
    "Other pricing or credit, please specify": "기타 가격제 또는 크레딧, 직접 입력",
    "Risk transfer mechanisms for under-insured or uninsured": "보험 부족 또는 미보험에 대한 리스크 이전 메커니즘",
    "Disclosure of risks and opportunities": "리스크 및 기회 공시",
    "Risk exposure by river basin": "유역별 리스크 노출",
    "Chief Risk Officer (CRO)": "최고리스크책임자(CRO)",
    "Executive level": "임원급",
    "Board or executive level": "이사회 또는 임원급",
    "Chief Compliance Officer (CCO)": "최고준법책임자(CCO)",
    "Risk policy": "리스크 정책",
    "Risk management": "리스크 관리",
    "Compliance with an environmental certification, please specify": "환경 인증 준수, 직접 입력",
    "Risk and opportunity identification, assessment and management": "리스크 및 기회 식별, 평가 및 관리",
    "Compliance with regulatory requirements/standards": "규제 요구사항/기준 준수",
    "Compliance with a carbon pricing system": "탄소가격제 준수",
    "Commercially/publicly available tools": "상용/공개 도구",
    "Water scenarios": "물 시나리오",
    "Risk manager": "리스크 관리자",
    "Risk committee": "리스크 위원회",
    "Risk analyst": "리스크 분석가",
    "Committee": "위원회",
    "Sustainability specialist": "지속가능성 전문가",
    "Chief Risks Officer (CRO)": "최고리스크책임자(CRO)",
    "Reports to the Chief Risks Officer (CRO)": "최고리스크책임자(CRO)에게 보고",
    "Risk and opportunities identification, assessment and management": "리스크 및 기회 식별, 평가 및 관리",
    "California Air Resources Board Compliance Offset Program": "캘리포니아 대기자원위원회 준수 상쇄 프로그램",
    "Not scored.": "평가 대상 아님.",
    "Response row": "응답 행",
    "Row 1": "행 1",
    "Activity undertaken": "수행 활동",
    "Insurance types underwritten": "인수 보험 유형",
    "Comment": "의견",
    "Comments": "의견",
    "Country/area": "국가/지역",
    "From (years)": "시작연도",
    "To (years)": "종료연도",
    "Sourcing method": "조달 방법",
    "Energy carrier": "에너지 매체",
    "Unit": "단위",
    "Metric numerator": "지표 분자",
    "Metric denominator": "지표 분모",
    "Target reference number": "목표 식별 번호",
    "Target type": "목표 유형",
    "Base year": "기준연도",
    "Target year": "목표연도",
    "End date": "종료일자",
    "Start date": "시작일자",
    "Disclosure metric": "공시 지표",
    "Disclosure scoring criteria": "Disclosure 평가기준",
    "Awareness scoring criteria": "Awareness 평가기준",
    "Management scoring criteria": "Management 평가기준",
    "Leadership scoring criteria": "Leadership 평가기준",
    "No, but we plan to do so in the next two years": "아니요, 하지만 향후 2년 내에 진행할 계획입니다",
    "No, and we do not plan to do so in the next two years": "아니요, 향후 2년 내에 진행할 계획이 없습니다",
    "Other carbon footprinting and/or exposure metrics (as defined by TCFD)": "기타 탄소발자국 및/또는 노출 지표(TCFD 정의)",
    "Lack of tools or methodologies available": "활용 가능한 도구 또는 방법론 부족",
    "We measure the impact of our portfolio on the climate": "포트폴리오가 기후에 미치는 영향을 측정함",
    "We measure the impact of our portfolio on water": "포트폴리오가 수자원에 미치는 영향을 측정함",
    "Primary reason for not measuring portfolio impact on climate": "포트폴리오의 기후 영향을 측정하지 않는 주된 이유",
    "Primary reason for not measuring portfolio impact on water": "포트폴리오의 수자원 영향을 측정하지 않는 주된 이유",
    "Explain why your organization does not measure its portfolio impact on climate": "포트폴리오의 기후 영향을 측정하지 않는 이유 설명",
    "Explain why your organization does not measure its portfolio impact on water": "포트폴리오의 수자원 영향을 측정하지 않는 이유 설명",
    "Retail": "소매",
    "Manufacturing": "제조",
    "Materials": "소재",
    "Apparel": "의류",
    "Hospitality": "숙박·외식",
    "International bodies": "국제기구",
    "Power generation": "발전",
    "Rail": "철도",
    "Marine": "해양 운송",
    "Aviation": "항공",
    "Education": "교육",
    "Customers": "고객",
    "Basic academic/theoretical research": "기초 학술/이론 연구",
    "Small scale commercial deployment": "소규모 상업 적용",
    "Large scale commercial deployment": "대규모 상업 적용",
    "Short-term": "단기",
    "Medium-term": "중기",
    "Long-term": "장기",
    "Board chair": "이사회 의장",
    "Underway": "진행 중",
    "Achieved": "달성",
    "Expired": "만료",
    "Revised": "수정",
    "Replaced": "대체",
    "Retired": "폐기",
    "Achieved and maintained": "달성 및 유지",
    "Increase": "증가",
    "Decrease": "감소",
    "Loans": "대출",
    "Project finance": "프로젝트 파이낸스",
    "Bonds": "채권",
    "Undrawn loan commitments": "미사용 대출약정",
    "Fixed income": "채권형 자산",
    "Cash equivalents/money market instruments": "현금성 자산/단기금융상품",
    "Paris Agreement": "파리협정",
    "Neutral": "중립",
    "Mixed": "혼합",
    "No change": "변경 없음",
    "Don't know": "모름",
    "Bank": "은행",
    "Banks": "은행",
    "Insurer": "보험사",
    "General (non-life)": "일반손해보험",
    "Life and/or Health": "생명 및/또는 건강보험",
    "Corporates (SMEs)": "기업(SME)",
    "Government / sovereign / quasi-government / sovereign wealth funds": "정부/국부펀드/준정부기관",
    "Family offices / high-net-worth individuals": "패밀리오피스/고액자산가",
    "Pension funds": "연기금",
    "Industry sectors your organization lends to, invests in, and/or insures": "귀사가 대출, 투자 및/또는 보험을 제공하는 산업 부문",
    "Analysis in progress": "분석 진행 중",
    "Limestone quarrying": "석회석 채석",
    "Portland cement manufacturing": "포틀랜드 시멘트 제조",
    "Blended cement": "혼합 시멘트",
    "Belite cements": "벨라이트 시멘트",
    "Bulk inorganic chemicals | Chlorine and Sodium hydroxide": "벌크 무기화학 | 염소 및 수산화나트륨",
    "Oil and gas value chain | Downstream": "석유 및 가스 가치사슬 | 다운스트림",
    "Oil and gas value chain | Midstream": "석유 및 가스 가치사슬 | 미드스트림",
    "Oil and gas value chain | Upstream": "석유 및 가스 가치사슬 | 업스트림",
    "Hot rolling": "열간 압연",
    "Light Duty Vehicles (LDV)": "경량 차량(LDV)",
    "Heavy Duty Vehicles (HDV)": "대형 차량(HDV)",
    "Produced and/or sourced": "생산 및/또는 조달",
    "Sourced": "조달",
    "Produced and sourced": "생산 및 조달",
    "Local": "지역",
    "Sub-national": "지방정부/주정부",
    "National": "국가",
    "Partial": "부분적",
    "Every three years or more": "3년마다 또는 그보다 드물게",
    "Employees": "임직원",
    "Indigenous peoples": "원주민",
    "Local communities": "지역사회",
    "National and/or subnational governments": "국가 및/또는 지방정부",
    "NGOs": "NGO",
    "Regulators": "규제기관",
    "External consultants": "외부 컨설턴트",
    "Internal tools/methods": "내부 도구/방법",
    "Stress tests": "스트레스 테스트",
    "Verification or assurance cycle in place": "검증 또는 보증 주기 운영",
    "No verification or assurance of current reporting year": "현재 보고연도 검증 또는 보증 없음",
    "Divestment": "투자 회수",
    "Change output": "산출물 변경",
    "Change physical operating conditions": "물리적 운영 조건 변경",
    "Copper": "구리",
    "Ammonia": "암모니아",
    "Coke": "코크스",
    "Petroleum coke": "석유 코크스",
    "Lubricants": "윤활유",
    "Naphtha": "나프타",
    "Liquid biofuel": "액체 바이오연료",
    "Biogas": "바이오가스",
    "Solar": "태양광",
    "Direction of change": "변화 방향",
    "Increased": "증가",
    "Decreased": "감소",
    "Biotech, health care & pharma": "바이오테크·헬스케어·제약",
    "Food, beverage & agriculture": "식음료·농업",
    "Science Based Targets initiative official validation letter": "SBTi 공식 검증서",
    "Methods/standards/tools applied": "적용한 방법론/기준/도구",
    "Methodologies/standards/tools applied": "적용한 방법론/기준/도구",
    "Technology/Science": "기술/과학",
    "Engaging regularly with external stakeholders and experts on environmental issues": "환경 이슈에 대해 외부 이해관계자 및 전문가와 정기적으로 참여",
    "Databases | EBSA - Ecologically or Biologically Significant Marine Areas dataset": "데이터베이스 | EBSA - 생태학적 또는 생물학적으로 중요한 해양지역 데이터셋",
    "Databases | Nation-specific databases, tools, or standards, please specify": "데이터베이스 | 국가별 데이터베이스, 도구 또는 기준, 직접 입력",
    "Databases | OSPAR List of Threatened and/or Declining Habitats": "데이터베이스 | OSPAR 멸종위협 및/또는 감소 서식지 목록",
    "Other | Partner and stakeholder consultation/analysis": "기타 | 파트너 및 이해관계자 협의/분석",
    "No, and we have not committed to seek validation from the Accountability Accelerator in the next two years": "아니요, 향후 2년 내 Accountability Accelerator 검증 신청을 약속하지 않았습니다",
    "Academic | Undergraduate education (e.g., BSc/BA in environment and sustainability, climate science, environmental science, water resources management, environmental engineering, forestry, etc.), please specify": "학술 | 학부 교육(예: 환경 및 지속가능성, 기후과학, 환경과학, 수자원 관리, 환경공학, 산림학 등), 직접 입력",
    "Academic | Postgraduate education (e.g., MSc/MA/PhD in environment and sustainability, climate science, environmental science, water resources management, forestry, etc.), please specify": "학술 | 대학원 교육(예: 환경 및 지속가능성, 기후과학, 환경과학, 수자원 관리, 산림학 등), 직접 입력",
    "Social commitment | Commitment to respect and protect customary rights to land, resources, and territory of Indigenous Peoples and Local Communities": "사회적 약속 | 원주민 및 지역사회의 토지, 자원, 영토에 대한 관습적 권리 존중 및 보호 약속",
    "Agreement under United Nations Convention on the Law of the Sea on the Conservation and Sustainable Use of Marine Biological Diversity of Areas beyond National Jurisdiction (BBNJ Agreement)": "국가관할권 이원지역 해양생물다양성 보전 및 지속가능한 이용에 관한 유엔해양법협약상 협정(BBNJ 협정)",
    "Secure Free, Prior and Informed Consent (FPIC) of Indigenous Peoples and local communities": "원주민 및 지역사회의 자유의사에 따른 사전인지동의(FPIC) 확보",
    "Change methodology": "방법론 변경",
    "Change boundary": "경계 변경",
    "Target derived using sectoral decarbonization approach": "섹터별 탈탄소화 접근법으로 도출한 목표",
    "National program, please specify": "국가 프로그램, 직접 입력",
    "Change topography or landscapes": "지형 또는 경관 변경",
    "Land use change": "토지 이용 변화",
    "Carbon neutral certification against National Carbon Offset Standard Building through NABERS Energy": "NABERS Energy를 통한 National Carbon Offset Standard Building 기준 탄소중립 인증",
    "Carbon neutral certification against National Carbon Offset Standard Building through Green Star - Performance Innovation Challenges": "Green Star - Performance Innovation Challenges를 통한 National Carbon Offset Standard Building 기준 탄소중립 인증",
    "Date target was set": "목표 설정일",
    "Target status in reporting year": "보고연도 목표 상태",
    "Target objective": "목표 목적",
    "% change from previous year": "전년 대비 변화율",
    "% of target achieved relative to base year": "기준연도 대비 목표 달성률",
    "Reasons for revision, replacement, or retirement of target": "목표 수정, 대체 또는 폐기 사유",
    "Explain target coverage and identify any exclusions": "목표 적용 범위 및 제외사항 설명",
    "Plan for achieving target, and progress made to the end of the reporting year": "목표 달성 계획 및 보고연도 말 기준 진행 상황",
    "Yes, this target has been approved by the Science Based Targets initiative": "예, 이 목표는 SBTi의 승인을 받았습니다",
    "Yes, we consider this a science-based target, and the target is currently being reviewed by the Science Based Targets initiative": "예, 당사는 이 목표를 과학기반 목표로 간주하며 현재 SBTi의 검토를 받고 있습니다",
    "Yes, we consider this a science-based target, and we have committed to seek validation of this target by the Science Based Targets initiative in the next two years": "예, 당사는 이 목표를 과학기반 목표로 간주하며 향후 2년 내 SBTi 검증을 받을 예정입니다",
    "Yes, we consider this a science-based target, but we have not committed to seek validation of this target by the Science Based Targets initiative within the next two years": "예, 당사는 이 목표를 과학기반 목표로 간주하지만 향후 2년 내 SBTi 검증을 받을 계획은 없습니다",
    "No, but we anticipate setting one in the next two years": "아니요, 하지만 향후 2년 내 설정할 예정입니다",
    "No, we do not anticipate setting one in the next two years": "아니요, 향후 2년 내 설정할 예정이 없습니다",
    "Well-below 2°C aligned": "2°C보다 훨씬 낮은 수준에 부합",
    "Carbon dioxide (CO2)": "이산화탄소(CO2)",
    "Nitrous oxide (N2O)": "아산화질소(N2O)",
    "Hydrofluorocarbons (HFCs)": "수소불화탄소(HFCs)",
    "Perfluorocarbons (PFCs)": "과불화탄소(PFCs)",
    "Sulphur hexafluoride (SF6)": "육불화황(SF6)",
    "Nitrogen trifluoride (NF3)": "삼불화질소(NF3)",
    "Scopes": "Scope",
    "Acute physical | Cyclone, hurricane, typhoon": "급성 물리적 리스크 | 사이클론, 허리케인, 태풍",
    "Acute physical | Disease or pests": "급성 물리적 리스크 | 질병 또는 병해충",
    "Acute physical | Flood (coastal, fluvial, pluvial, ground water)": "급성 물리적 리스크 | 홍수(해안, 하천, 강우, 지하수)",
    "Acute physical | Heavy precipitation (rain, hail, snow/ice)": "급성 물리적 리스크 | 집중 강수(비, 우박, 눈/얼음)",
    "Acute physical | Storm (including blizzards, dust, and sandstorms)": "급성 물리적 리스크 | 폭풍(눈보라, 먼지 폭풍, 모래 폭풍 포함)",
    "Chronic physical | Acid rock drainage and metal leaching": "만성 물리적 리스크 | 산성암석배수 및 금속 용출",
    "Chronic physical | Changing precipitation patterns and types (rain, hail, snow/ice)": "만성 물리적 리스크 | 강수 패턴 및 유형 변화(비, 우박, 눈/얼음)",
    "Chronic physical | Increased levels of macro or microplastic leakage to air, soil, freshwater and/or marine bodies": "만성 물리적 리스크 | 대기, 토양, 담수 및/또는 해양으로의 대형·미세플라스틱 누출 증가",
    "Chronic physical | Operations in or adjacent to areas important for biodiversity": "만성 물리적 리스크 | 생물다양성 중요 지역 내 또는 인접 지역 운영",
    "Chronic physical | Precipitation or hydrological variability": "만성 물리적 리스크 | 강수 또는 수문 변동성",
    "Chronic physical | Threatened species in or near mining operation": "만성 물리적 리스크 | 광산 운영지역 내 또는 인근 멸종위기종",
    "Policy | Limited or lack of river basin management": "정책 | 유역 관리 제한 또는 부재",
    "Policy | Limited or lack of transboundary water management": "정책 | 초국경 수자원 관리 제한 또는 부재",
    "Policy | Mandatory water efficiency, conservation, recycling, or process standards": "정책 | 물 효율, 보전, 재활용 또는 공정 기준 의무화",
    "Policy | Uncertainty and/or conflicts involving land tenure rights and water rights": "정책 | 토지 보유권 및 수자원 권리 관련 불확실성 및/또는 갈등",
    "Market | Inability to attract co-financiers and/or investors due to uncertain risks related to the environment": "시장 | 환경 관련 리스크 불확실성으로 인한 공동 금융기관 및/또는 투자자 유치 곤란",
    "Market | Inadequate access to water, sanitation, and hygiene services (WASH)": "시장 | 물·위생·보건(WASH) 서비스 접근성 부족",
    "Market | Lack of availability and/or increased cost of certified sustainable material": "시장 | 인증된 지속가능 원재료의 가용성 부족 및/또는 비용 증가",
    "Market | Lack of availability and/or increased cost of raw materials": "시장 | 원재료 가용성 부족 및/또는 비용 증가",
    "Market | Lack of availability and/or increased cost of recycled or renewable content": "시장 | 재생 또는 재생가능 원료의 가용성 부족 및/또는 비용 증가",
    "Reputation | Exclusion of vulnerable and marginalized stakeholders (e.g., informal workers)": "평판 | 취약하고 소외된 이해관계자 배제(예: 비공식 노동자)",
    "Technology | Limited access to soil conservation and other sustainable techniques": "기술 | 토양 보전 및 기타 지속가능 기술 접근성 제한",
    "Has there been a structural change?": "구조적 변경이 있었습니까?",
    "Is this a science-based target?": "과학기반 목표입니까?",
    "Is this target part of an emissions target?": "이 목표가 배출량 목표의 일부입니까?",
    "Is this target part of an overarching initiative?": "이 목표가 상위 이니셔티브의 일부입니까?",
    "Do you intend to neutralize any residual emissions with permanent carbon removals at the end of the target?": "목표 종료 시점에 잔여 배출량을 영구적 탄소 제거로 중화할 계획입니까?",
    "Do you plan to mitigate emissions beyond your value chain?": "가치사슬 밖의 배출량 완화를 계획하고 있습니까?",
    "Do you intend to purchase and cancel carbon credits for neutralization and/or beyond value chain mitigation?": "중화 및/또는 가치사슬 밖 완화를 위해 탄소 크레딧을 구매 및 소각할 계획입니까?",
    "Have you implemented any response to these impacts?": "이러한 영향에 대한 대응을 이행했습니까?",
    "Have any response to these impacts been implemented?": "이러한 영향에 대한 대응이 이행되었습니까?",
    "Have any of the buildings been certified as net zero carbon?": "해당 건물 중 넷제로 탄소 인증을 받은 건물이 있습니까?",
    "Are you able to report the vintage of the credits at retirement?": "크레딧 폐기 시점의 발행연도를 보고할 수 있습니까?",
    "Were these credits issued to or purchased by your organization?": "해당 크레딧은 귀사에 발행되었거나 귀사가 구매한 것입니까?",
    "Are you able to provide the gross exposure for your undrawn loan commitment separately from the drawn loan commitment?": "미사용 대출약정의 총 익스포저를 실행된 대출약정과 구분하여 제공할 수 있습니까?",
    "Have you validated your process for SBTN Step 1 ‘Assess'?": "SBTN 1단계 '평가'에 대한 프로세스를 검증했습니까?",
    "SBTN Step 1 ‘Assess' official validation letter": "SBTN 1단계 '평가' 공식 검증서",
    "Positions of individuals or committees with accountability for this environmental issue": "이 환경이슈에 대한 책임을 맡은 개인 또는 위원회의 직책",
    "Frequency with which this environmental issue is a scheduled agenda item": "이 환경이슈가 정기 안건으로 다뤄지는 빈도",
    "Position of individual or committee with responsibility": "책임을 맡은 개인 또는 위원회의 직책",
    "% of total C-suite and board-level monetary incentives linked to the management of this environmental issue": "이 환경이슈 관리와 연계된 C-suite 및 이사회 수준 금전적 인센티브 비율(%)",
    "Type of direct engagement with policy makers on this policy, law, or regulation": "해당 정책, 법률 또는 규제와 관련한 정책입안자 직접 참여 유형",
    "Describe the aim of this funding and how it could influence policy, law or regulation that may impact the environment": "해당 자금 지원의 목적과 환경에 영향을 미칠 수 있는 정책, 법률 또는 규제에 미칠 수 있는 영향을 설명하십시오",
    "State the organization or position of individual": "조직명 또는 개인의 직책을 기재하십시오",
    "Environmental issues relevant to the policies, laws, or regulations on which the organization or individual has taken a position": "조직 또는 개인이 입장을 표명한 정책, 법률 또는 규제와 관련된 환경이슈",
    "Standard or framework the publication is in line with": "발간물이 부합하는 기준 또는 프레임워크",
    "Assumptions, uncertainties and constraints in scenario": "시나리오의 가정, 불확실성 및 제약 조건",
    "SSPs used in conjunction with scenario": "시나리오와 함께 사용한 SSP",
    "Frequency of feedback collection": "피드백 수집 빈도",
    "Description of key assumptions and dependencies on which the transition plan relies": "전환계획이 의존하는 주요 가정 및 의존성 설명",
    "Engaging with this stakeholder on environmental issues": "해당 이해관계자와 환경이슈에 대해 참여",
    "Mechanisms for monitoring compliance with this environmental requirement": "이 환경 요구사항의 준수 여부를 모니터링하는 메커니즘",
    "Agriculture, forestry or other land sector activities": "농업, 임업 또는 기타 토지 부문 활동",
    "Metric numerator (Gross global combined Scope 1 and 2 emissions, metric tons CO2e)": "지표 분자(전 세계 총 Scope 1 및 2 합산 배출량, 미터톤 CO2e)",
    "Reasons for change": "변경 사유",
    "Reason for change": "변경 사유",
    "Absolute scope 1 emissions (metric tons CO2e)": "절대 Scope 1 배출량(미터톤 CO2e)",
    "Emissions intensity based on gross or net electricity generation": "총 또는 순 전력 생산량 기준 배출집약도",
    "Scope 1 emissions intensity (Gross generation)": "Scope 1 배출집약도(총 발전량)",
    "Scope 1 emissions intensity (Net generation)": "Scope 1 배출집약도(순 발전량)",
    "Net Scope 1 emissions intensity, metric tons CO2e per metric ton": "순 Scope 1 배출집약도, 미터톤당 미터톤 CO2e",
    "Unit of hydrocarbon category (denominator)": "탄화수소 카테고리 단위(분모)",
    "Metric tons CO2e from hydrocarbon category per unit specified": "지정한 단위당 탄화수소 카테고리의 미터톤 CO2e",
    "Emissions intensity figure, metric tons CO2e per metric ton of crude steel production": "조강 생산 미터톤당 배출집약도 수치(미터톤 CO2e)",
    "Energy intensity figure, GJ (LHV) per metric ton of crude steel production": "조강 생산 미터톤당 에너지 집약도 수치(GJ, LHV)",
    "Methodology applied": "적용한 방법론",
    "Please explain the changes, and relevant standards/methodologies used": "변경사항과 사용한 관련 기준/방법론을 설명하십시오",
    "Metric numerator (Scope 3 emissions: use of sold products) in Metric tons CO2e": "지표 분자(Scope 3 배출량: 판매 제품의 사용, 미터톤 CO2e)",
    "Vehicle unit sales in reporting year": "보고연도 차량 판매 대수",
    "Vehicle lifetime in years": "차량 수명(년)",
    "Annual distance in km or miles (unit specified by column 4)": "연간 주행거리(km 또는 마일, 4열에서 지정한 단위)",
    "Throughput (Million barrels)": "처리량(백만 배럴)",
    "Intensity figure in reporting year for Scope 3, Category 3: Fuel- and energy-related activities": "보고연도 Scope 3 카테고리 3(연료 및 에너지 관련 활동) 집약도 수치",
    "Metric numerator: emissions in metric tons CO2e": "지표 분자: 배출량(미터톤 CO2e)",
    "Please explain any exclusions in your coverage of transport emissions in selected category, and reasons for change in emissions intensity.": "선택한 카테고리의 운송 배출량 산정 범위에서 제외한 사항과 배출집약도 변경 사유를 설명하십시오",
    "Anticipated direction of change in scope 1 emissions": "Scope 1 배출량의 예상 변화 방향",
    "Anticipated scope 1 emissions change in %": "Scope 1 배출량 예상 변화율(%)",
    "Anticipated direction of change in scope 2 emissions": "Scope 2 배출량의 예상 변화 방향",
    "Anticipated scope 2 emissions change in %": "Scope 2 배출량 예상 변화율(%)",
    "Anticipated direction of change in scope 3 emissions": "Scope 3 배출량의 예상 변화 방향",
    "Anticipated scope 3 emissions change in %": "Scope 3 배출량 예상 변화율(%)",
    "Target type: Absolute or intensity": "목표 유형: 절대량 또는 집약도",
    "Emissions scopes of portfolio companies covered by the target": "목표에 포함된 포트폴리오 기업의 배출량 Scope",
    "Metric (or target numerator if intensity)": "지표(집약도 목표인 경우 목표 분자)",
    "Frequency of target reviews": "목표 검토 빈도",
    "We have an interim target": "중간 목표 보유 여부",
    "End of interim target year": "중간 목표 종료연도",
    "Figure in interim target year": "중간 목표연도 수치",
    "Taxonomy or framework used to define \"green finance\"": "\"녹색금융\" 정의에 사용한 분류체계 또는 프레임워크",
    "Aggregation weighting used": "사용한 집계 가중치",
    "Target set and progress against it tracked": "목표 설정 및 진행상황 추적 여부",
    "Energy and renewables": "에너지 및 재생에너지",
    "Environmental protection and management procedures": "환경 보호 및 관리 절차",
    "Financial mechanisms (e.g., taxes, subsidies, etc.)": "재무 메커니즘(예: 세금, 보조금 등)",
    "Transparency and due diligence": "투명성 및 실사",
    "Energy and renewables | Alternative fuels": "에너지 및 재생에너지 | 대체 연료",
    "Energy and renewables | Electricity grid access for renewables": "에너지 및 재생에너지 | 재생에너지의 전력망 접근",
    "Energy and renewables | Energy attribute certificate systems": "에너지 및 재생에너지 | 에너지 속성 인증서 제도",
    "Energy and renewables | Energy efficiency requirements": "에너지 및 재생에너지 | 에너지 효율 요구사항",
    "Energy and renewables | Green electricity tariffs/renewable energy PPAs": "에너지 및 재생에너지 | 녹색 전력요금/재생에너지 PPA",
    "Energy and renewables | Low-carbon, non-renewable energy generation": "에너지 및 재생에너지 | 저탄소 비재생에너지 발전",
    "Energy and renewables | Minimum energy efficiency requirements": "에너지 및 재생에너지 | 최소 에너지 효율 요구사항",
    "Energy and renewables | New fossil fuel energy generation capacity": "에너지 및 재생에너지 | 신규 화석연료 발전 용량",
    "Energy and renewables | Renewable energy generation": "에너지 및 재생에너지 | 재생에너지 발전",
    "Energy and renewables | Other energy and renewables, please specify": "에너지 및 재생에너지 | 기타 에너지 및 재생에너지, 직접 입력",
    "Environmental protection and management procedures | Biodiversity in areas beyond national jurisdiction": "환경 보호 및 관리 절차 | 국가관할권 이원지역의 생물다양성",
    "Environmental protection and management procedures | Environmental registries": "환경 보호 및 관리 절차 | 환경 등록부",
    "Environmental protection and management procedures | Environmental protection requirements": "환경 보호 및 관리 절차 | 환경 보호 요구사항",
    "Environmental protection and management procedures | Financing & incentivizing sustainable forest management": "환경 보호 및 관리 절차 | 지속가능한 산림관리를 위한 금융 및 인센티브",
    "Environmental protection and management procedures | Fishery closure": "환경 보호 및 관리 절차 | 어장 폐쇄",
    "Environmental protection and management procedures | Fishery management, Total Allowable Catches (TAC) setting & quota allocation": "환경 보호 및 관리 절차 | 어업 관리, 총허용어획량(TAC) 설정 및 쿼터 배분",
    "Environmental protection and management procedures | Forest management plans": "환경 보호 및 관리 절차 | 산림 관리 계획",
    "Environmental protection and management procedures | Forest private reserves": "환경 보호 및 관리 절차 | 산림 사유 보호구역",
    "Environmental protection and management procedures | Land Conservation and Protected Areas": "환경 보호 및 관리 절차 | 토지 보전 및 보호지역",
    "Environmental protection and management procedures | Landscape (including river basin) and jurisdictional approaches": "환경 보호 및 관리 절차 | 경관(유역 포함) 및 관할권 접근방식",
    "Environmental protection and management procedures | Legal reserves": "환경 보호 및 관리 절차 | 법정 보호구역",
    "Environmental protection and management procedures | Marine Protected Area (MPA) designation, management, and maintenance": "환경 보호 및 관리 절차 | 해양보호구역(MPA) 지정, 관리 및 유지",
    "Environmental protection and management procedures | Operations permits": "환경 보호 및 관리 절차 | 운영 허가",
    "Environmental protection and management procedures | Peatland management": "환경 보호 및 관리 절차 | 이탄지 관리",
    "Environmental protection and management procedures | Provision of Deep Sea Mining (DSM) exploration licenses": "환경 보호 및 관리 절차 | 심해저 채굴(DSM) 탐사 면허 제공",
    "Environmental protection and management procedures | Restoration/ rehabilitation": "환경 보호 및 관리 절차 | 복원/재활",
    "Environmental protection and management procedures | Resilience and adaptive capacity of forests": "환경 보호 및 관리 절차 | 산림의 회복탄력성 및 적응역량",
    "Environmental protection and management procedures | Shipping lane and speed designation and regulation": "환경 보호 및 관리 절차 | 항로 및 속도 지정과 규제",
    "Environmental protection and management procedures | Socio-economic land-use planning": "환경 보호 및 관리 절차 | 사회경제적 토지이용 계획",
    "Environmental protection and management procedures | Transboundary water management": "환경 보호 및 관리 절차 | 초국경 수자원 관리",
    "Environmental protection and management procedures | Other environmental protection and management procedures, please specify": "환경 보호 및 관리 절차 | 기타 환경 보호 및 관리 절차, 직접 입력",
    "Scopes recalculated": "재산정된 Scope",
    "Target is set and progress against it is tracked at": "목표 설정 및 진행상황 추적 단위",
    "Figure or percentage at end of date of target": "목표 종료일 기준 수치 또는 비율",
    "Planned milestones and/or near-term investments for neutralization at the end of the target": "목표 종료 시점 중화를 위한 계획된 마일스톤 및/또는 단기 투자",
    "Describe the actions to mitigate emissions beyond your value chain": "가치사슬 밖 배출량 완화를 위한 조치를 설명하십시오",
    "Explain the reasons for the revision, retirement, or replacement of the target": "목표 수정, 폐기 또는 대체 사유를 설명하십시오",
    "Process for reviewing target": "목표 검토 프로세스",
    "Targets linked to this net zero target": "이 넷제로 목표와 연계된 목표",
    "End date of target for achieving net zero": "넷제로 달성을 위한 목표 종료일",
    "Emissions reduction initiatives that were active within the reporting year": "보고연도에 활성화된 배출량 감축 이니셔티브",
    "Primary reason for not having active emissions reduction initiatives within the reporting year": "보고연도에 활성화된 배출량 감축 이니셔티브가 없는 주된 이유",
    "Explain why you did not have active emissions reduction initiatives within the reporting year": "보고연도에 활성화된 배출량 감축 이니셔티브가 없었던 이유를 설명하십시오",
    "Number of initiatives": "이니셔티브 수",
    "Total estimated annual CO2e savings in metric tonnes CO2e": "연간 CO2e 예상 절감량 합계(미터톤 CO2e)",
    "Initiative category & Initiative type": "이니셔티브 범주 및 유형",
    "Estimated annual CO₂e savings (metric tonnes CO2e)": "연간 CO2e 예상 절감량(미터톤 CO2e)",
    "Scope(s) or Scope 3 category(ies) where emissions savings occur": "배출량 절감이 발생하는 Scope 및/또는 Scope 3 카테고리",
    "Annual monetary savings (unit currency - as specified in 1.2)": "연간 금전적 절감액(1.2에서 지정한 통화 단위)",
    "Investment required (unit currency - as specified in 1.2)": "필요 투자액(1.2에서 지정한 통화 단위)",
    "Payback period": "투자 회수 기간",
    "Estimated lifetime of the initiative": "이니셔티브 예상 수명",
    "Occurrence of flaring in production and/or processing activities": "생산 및/또는 가공 활동에서 플레어링 발생 여부",
    "Voluntary/Mandatory": "자발적/의무",
    "% of total plant capacity": "총 설비 용량 대비 비율(%)",
    "Primary reason for not having technique": "해당 기술을 보유하지 않은 주된 이유",
    "CO2 transferred in the reporting year (metric tons CO2)": "보고연도 CO2 이전량(미터톤 CO2)",
    "Types of CO2 transfer": "CO2 이전 유형",
    "Injected CO2 in the reporting year (metric tons CO2)": "보고연도 CO2 주입량(미터톤 CO2)",
    "Percentage of injected CO2 intended for long-term (>10,000 year) storage": "장기(1만 년 초과) 저장 목적 CO2 주입 비율",
    "CO2 leakage in the reporting year during injection (metric tons CO2)": "보고연도 주입 중 CO2 누출량(미터톤 CO2)",
    "Year in which injection began": "주입 시작 연도",
    "Cumulative CO2 injected and stored (metric tons CO2)": "누적 CO2 주입 및 저장량(미터톤 CO2)",
    "Ongoing leakage (average estimated % of stored CO2 per year)": "지속 누출량(연간 저장 CO2 대비 평균 추정 비율)",
    "Describe your process for monitoring leakage and any long-term storage of the CO2": "CO2 누출 및 장기 저장 모니터링 프로세스를 설명하십시오",
    "Primary climate change-related benefit": "주된 기후변화 관련 편익",
    "Estimated CO2e savings (metric tons CO2e)": "예상 CO2e 절감량(미터톤 CO2e)",
    "Explanation of how you encourage implementation": "이행을 장려하는 방법 설명",
    "Climate change related benefit": "기후변화 관련 편익",
    "Earliest project phase that most commonly includes an assessment": "평가가 가장 일반적으로 포함되는 가장 이른 프로젝트 단계",
    "Ability to disclose embodied carbon emissions": "내재탄소 배출량 공시 가능 여부",
    "Year of completion": "완료 연도",
    "Normalization factor (denominator)": "정규화 계수(분모)",
    "% of new construction/major renovation projects in the last three years covered by this metric (by floor area)": "최근 3년간 이 지표가 포함하는 신규 건설/주요 개보수 프로젝트 비율(바닥면적 기준)",
    "Life cycle stage(s) covered for the reference product/service or baseline scenario": "기준 제품/서비스 또는 기준 시나리오에 포함된 전과정 단계",
    "Estimated avoided emissions (metric tons CO2e per functional unit) compared to reference product/service or baseline scenario": "기준 제품/서비스 또는 기준 시나리오 대비 예상 회피 배출량(기능 단위당 미터톤 CO2e)",
    "Explain your calculation of avoided emissions, including any assumptions": "가정을 포함하여 회피 배출량 산정 방식을 설명하십시오",
    "Taxonomy used to classify product(s) or service(s) as low-carbon": "제품 또는 서비스를 저탄소로 분류하는 데 사용한 분류체계",
    "Have you estimated the avoided emissions of this low-carbon product(s) or service(s)": "해당 저탄소 제품 또는 서비스의 회피 배출량을 산정했습니까?",
    "Methodology used to calculate avoided emissions": "회피 배출량 산정에 사용한 방법론",
    "Functional unit used": "사용한 기능 단위",
    "Reference product/service or baseline scenario used": "사용한 기준 제품/서비스 또는 기준 시나리오",
    "% of net zero carbon buildings in the total portfolio (by floor area)": "전체 포트폴리오 중 넷제로 탄소 건물 비율(바닥면적 기준)",
    "% of buildings certified as net zero carbon in the total portfolio (by floor area)": "전체 포트폴리오 중 넷제로 탄소 인증 건물 비율(바닥면적 기준)",
    "% of net zero carbon buildings in the total number of buildings completed in the last 3 years": "최근 3년간 준공된 전체 건물 중 넷제로 탄소 건물 비율",
    "% of buildings certified as net zero carbon in the total number of buildings completed in the last 3 years": "최근 3년간 준공된 전체 건물 중 넷제로 탄소 인증 건물 비율",
    "Method the program uses to assess additionality for this project": "프로그램이 이 프로젝트의 추가성을 평가하는 방법",
    "Approaches by which the selected program requires this project to address reversal risk": "선택한 프로그램이 이 프로젝트에 요구하는 환원 리스크 대응 접근방식",
    "Potential sources of leakage the selected program requires this project to have assessed": "선택한 프로그램이 이 프로젝트에 평가하도록 요구하는 잠재적 누출원",
    "Provide details of other issues the selected program requires projects to address": "선택한 프로그램이 프로젝트에 대응하도록 요구하는 기타 이슈의 세부사항",
    "Credits retired by your organization from this project in the reporting year (metric tons CO2e)": "보고연도에 귀사가 이 프로젝트에서 폐기한 크레딧(미터톤 CO2e)",
    "Vintage of credits at retirement": "크레딧 폐기 시점의 발행연도",
    "Carbon-crediting program by which the credits were issued": "크레딧이 발행된 탄소크레딧 프로그램",
    "% of undrawn loan commitments included in the financed emissions calculation": "금융배출량 산정에 포함된 미인출 대출약정 비율(%)",
    "% of financed emissions calculated using data obtained from clients/investees (optional)": "고객/투자대상으로부터 확보한 데이터를 사용하여 산정한 금융배출량 비율(%)(선택)",
    "Weighted data quality score (for PCAF-aligned data quality scores only)": "가중 데이터 품질 점수(PCAF 부합 데이터 품질 점수에 한함)",
    "% calculated using data obtained from clients/investees": "고객/투자대상으로부터 확보한 데이터를 사용하여 산정한 비율(%)",
    "% of emissions calculated using data obtained from clients/investees": "고객/투자대상으로부터 확보한 데이터를 사용하여 산정한 배출량 비율(%)",
    "Value of assets covered in the calculation based on outstanding loan amounts": "미상환 대출금액 기준 산정에 포함된 자산가치",
    "Value of assets covered in the calculation including undrawn loan commitments": "미인출 대출약정을 포함하여 산정에 포함된 자산가치",
    "New loans advanced in reporting year (unit currency - as specified 1.2)": "보고연도 신규 실행 대출(1.2에서 지정한 통화 단위)",
    "Total premium written in reporting year (unit currency - as specified in 1.2)": "보고연도 총 원수보험료(1.2에서 지정한 통화 단위)",
    "% of portfolio value comprised of fossil fuel assets to total portfolio value in reporting year": "보고연도 총 포트폴리오 가치 중 화석연료 자산 비율(%)",
    "Reporting values of the financing and/or insurance of activities or sectors that are eligible under or aligned with a sustainable finance taxonomy": "지속가능금융 분류체계 대상 또는 부합 활동/섹터의 금융 및/또는 보험 금액 보고 여부",
    "Share of aligned assets based on CAPEX of investees out of total asset in the reporting year": "보고연도 총자산 중 투자대상 CAPEX 기준 부합 자산 비율",
    "Share of eligible assets based on CAPEX of investees out of total asset in the reporting year": "보고연도 총자산 중 투자대상 CAPEX 기준 대상 자산 비율",
    "Share of aligned assets contributing to climate change mitigation based on turnover of investees in the reporting year": "보고연도 투자대상 매출액 기준 기후변화 완화 기여 부합 자산 비율",
    "Share of aligned assets contributing to climate change mitigation that is transitional based on turnover of investees in the reporting year": "보고연도 투자대상 매출액 기준 기후변화 완화 기여 부합 자산 중 전환 활동 비율",
    "Share of aligned assets contributing to climate change mitigation that is enabling based on turnover of investees in the reporting year": "보고연도 투자대상 매출액 기준 기후변화 완화 기여 부합 자산 중 가능화 활동 비율",
    "Share of aligned assets contributing to climate change adaptation based on turnover of investees in the reporting year": "보고연도 투자대상 매출액 기준 기후변화 적응 기여 부합 자산 비율",
    "Share of aligned assets contributing to climate change adaptation that is adapted based on turnover of investees in the reporting year": "보고연도 투자대상 매출액 기준 기후변화 적응 기여 부합 자산 중 적응 활동 비율",
    "Share of aligned assets contributing to climate change adaptation that is enabling based on turnover of investees in the reporting year": "보고연도 투자대상 매출액 기준 기후변화 적응 기여 부합 자산 중 가능화 활동 비율",
    "Taxonomy under which portfolio alignment is being reported": "포트폴리오 부합성을 보고하는 분류체계",
    "Share of aligned assets contributing to climate change mitigation that is transitional based on CAPEX of investees in the reporting year": "보고연도 투자대상 CAPEX 기준 기후변화 완화 기여 부합 자산 중 전환 활동 비율",
    "Share of aligned assets contributing to climate change mitigation that is enabling based on CAPEX of investees in the reporting year": "보고연도 투자대상 CAPEX 기준 기후변화 완화 기여 부합 자산 중 가능화 활동 비율",
    "Share of aligned assets contributing to climate change adaptation that is adapted based on CAPEX of investees in the reporting year": "보고연도 투자대상 CAPEX 기준 기후변화 적응 기여 부합 자산 중 적응 활동 비율",
    "Share of aligned assets contributing to climate change adaptation that is enabling based on CAPEX of investees in the reporting year": "보고연도 투자대상 CAPEX 기준 기후변화 적응 기여 부합 자산 중 가능화 활동 비율",
    "Description of assets excluded from alignment calculation and reasons for exclusion": "부합성 산정에서 제외된 자산과 제외 사유 설명",
    "Gross premiums written for taxonomy-aligned non-life insurance and reinsurance activities": "분류체계 부합 손해보험 및 재보험 활동의 총 원수보험료",
    "Total premiums written": "총 원수보험료",
    "\"Do No Significant Harm\" requirements met": "\"중대한 피해 없음(DNSH)\" 요구사항 충족 여부",
    "Details of \"Do No Significant Harm\" analysis": "\"중대한 피해 없음(DNSH)\" 분석 세부사항",
    "Total assets covered in the calculation of the taxonomy KPIs in the reporting year": "보고연도 분류체계 KPI 산정에 포함된 총자산",
    "Total assets excluded from the calculation of your alignment KPIs in the reporting year": "보고연도 부합성 KPI 산정에서 제외된 총자산",
    "Aligned assets based on turnover of investees in the reporting year (unit currency as selected in 1.2)": "보고연도 투자대상 매출액 기준 부합 자산(1.2에서 선택한 통화 단위)",
    "Share of aligned assets based on turnover of investees out of total assets in the reporting year": "보고연도 총자산 중 투자대상 매출액 기준 부합 자산 비율",
    "Eligible assets based on turnover of investees in the reporting year": "보고연도 투자대상 매출액 기준 대상 자산",
    "Share of eligible assets based on turnover of investees in the reporting year out of total assets in the reporting year": "보고연도 총자산 중 투자대상 매출액 기준 대상 자산 비율",
    "Existing products and services enable clients to mitigate and/or adapt to the effects of environmental issues": "기존 제품 및 서비스가 고객의 환경이슈 영향 완화 및/또는 적응을 가능하게 합니까?",
    "Primary reason for not offering products and services that enable clients to mitigate and/or adapt to the effects of environmental issues": "고객의 환경이슈 영향 완화 및/또는 적응을 가능하게 하는 제품 및 서비스를 제공하지 않는 주된 이유",
    "Explain why your organization does not offer products and services that enable clients to mitigate and/or adapt to the effects of environmental issues": "귀사가 고객의 환경이슈 영향 완화 및/또는 적응을 가능하게 하는 제품 및 서비스를 제공하지 않는 이유를 설명하십시오",
    "Product considers principal adverse impacts on environmental factors": "제품이 환경 요소에 대한 주요 부정적 영향을 고려함",
    "Details on how the principal adverse impacts on environmental factors are considered in this product": "이 제품에서 환경 요소에 대한 주요 부정적 영향을 고려하는 방법의 세부사항",
    "Type of product classification": "제품 분류 유형",
    "Taxonomy or methodology used to identify product characteristics": "제품 특성 식별에 사용한 분류체계 또는 방법론",
    "Type of solution financed, invested in or insured": "금융 제공, 투자 또는 보험 인수한 솔루션 유형",
    "Verification/assurance standard": "검증/인증 기준",
    "Further details of the third-party verification/assurance process": "제3자 검증/인증 프로세스 추가 세부사항",
    "Attach verification/assurance evidence/report (optional)": "검증/인증 증빙/보고서 첨부(선택)",
  }),
);

const KO_FIELD_REPLACEMENTS = [
  [/보고ing/gi, "보고"],
  [/reporting/gi, "보고"],
  [/de아니요minator/gi, "분모"],
  [/denominator/gi, "분모"],
  [/아니요t/gi, "않음"],
  [/아니요n-/gi, "비"],
  [/repla시멘트/gi, "대체"],
  [/assessment/gi, "평가"],
  [/평가ment/gi, "평가"],
  [/프로세스ing/gi, "가공"],
  [/transportation/gi, "운송"],
  [/운송ation/gi, "운송"],
  [/End-의-life/gi, "수명 종료"],
  [/end-of-life/gi, "수명 종료"],
  [/Life cycle/gi, "전과정"],
  [/전과정 stage\(s\)/gi, "전과정 단계"],
  [/사용 stage/gi, "사용 단계"],
  [/cradle--gate/gi, "원료취득-공장출하"],
  [/cradle--grave/gi, "원료취득-폐기"],
  [/cradle--cradle\/closed loop 생산/gi, "원료취득-재활용/폐쇄루프 생산"],
  [/Fossil 연료/gi, "화석연료"],
  [/fossil fuel/gi, "화석연료"],
  [/Af산림ation/gi, "조림"],
  [/Agro산림ry/gi, "혼농임업"],
  [/Re산림ation/gi, "재조림"],
  [/K아니요wledge sharing/gi, "지식 공유"],
  [/Waste 관리/gi, "폐기물 관리"],
  [/Property 섹터/gi, "부동산 섹터"],
  [/Mixed 사용/gi, "혼합 용도"],
  [/탄소 capture, utilization, 및 저장 \(CCUS\)/gi, "탄소 포집·활용·저장(CCUS)"],
  [/메탄 reforming 와\/과 CCUS/gi, "CCUS를 활용한 메탄 개질"],
  [/Site\/시설/gi, "사업장/시설"],
  [/Lack 의 내부 자원/gi, "내부 자원 부족"],
  [/중요 그러나 않음 immediate 사업 우선순위/gi, "중요하지만 즉각적 사업 우선순위는 아님"],
  [/Judged unimportant, explanation 제공된/gi, "중요하지 않다고 판단, 설명 제공됨"],
  [/유형 및 세부 정보:\s*engagement/gi, "참여 유형 및 세부 정보"],
  [/배출량 relevant 및 계산된, 그러나 아님 disclosed/gi, "배출량은 관련성이 있고 산정되었으나 공시되지 않음"],
  [/설명 이유s revision, 대체, 또는 retirement 의 목표/gi, "목표 수정, 대체 또는 폐기 사유 설명"],
  [/관리 관행 reference 숫자 입력/gi, "관리 관행 식별 번호"],
  [/reference 숫자 입력/gi, "식별 번호"],
  [/동안모든 effect/gi, "전체 영향"],
  [/Less 보다 1\s*%/gi, "1% 미만"],
  [/goods 및 서비스/gi, "상품 및 서비스"],
  [/Purchased goods and services/gi, "구매한 상품 및 서비스"],
  [/Capital goods/gi, "자본재"],
  [/Fuel-and-energy-related activities \(not included in Scopes 1 or 2\)/gi, "연료 및 에너지 관련 활동(Scope 1 또는 2에 포함되지 않음)"],
  [/Fuel-and-energy-related 활동 \(않음 included in Scopes 1 또는 2\)/gi, "연료 및 에너지 관련 활동(Scope 1 또는 2에 포함되지 않음)"],
  [/연료-및-에너지-related 활동 \(않음 포함된 Scopes 1 또는 2\)/gi, "연료 및 에너지 관련 활동(Scope 1 또는 2에 포함되지 않음)"],
  [/Upstream transportation and distribution/gi, "업스트림 운송 및 유통"],
  [/Downstream transportation and distribution/gi, "다운스트림 운송 및 유통"],
  [/Upstream 운송 및 유통/gi, "업스트림 운송 및 유통"],
  [/Downstream 운송 및 유통/gi, "다운스트림 운송 및 유통"],
  [/Waste generated in operations/gi, "운영에서 발생한 폐기물"],
  [/Waste 생산한 운영/gi, "운영에서 발생한 폐기물"],
  [/Business travel/gi, "출장"],
  [/사업 travel/gi, "출장"],
  [/Employee commuting/gi, "직원 통근"],
  [/Upstream leased assets/gi, "업스트림 임차 자산"],
  [/Downstream leased assets/gi, "다운스트림 임대 자산"],
  [/Upstream leased 자산/gi, "업스트림 임차 자산"],
  [/Downstream leased 자산/gi, "다운스트림 임대 자산"],
  [/Processing of sold products/gi, "판매 제품의 가공"],
  [/가공 의 판매된 제품/gi, "판매 제품의 가공"],
  [/Use of sold products/gi, "판매 제품의 사용"],
  [/End-of-life treatment of sold products/gi, "판매 제품의 수명 종료 처리"],
  [/수명 종료 treatment 의 판매된 제품/gi, "판매 제품의 수명 종료 처리"],
  [/Franchises/gi, "프랜차이즈"],
  [/Investments/gi, "투자"],
  [/Scope\(s\) 또는 Scope 3 카테고리\(ies\)/gi, "Scope 및/또는 Scope 3 카테고리"],
  [/Scope 3 카테고리\(ies\)/gi, "Scope 3 카테고리"],
  [/Scopes 사용된 산정 의 intensities/gi, "집약도 산정에 사용한 Scope"],
  [/metric tons/gi, "미터톤"],
  [/미터톤 CO2e/gi, "미터톤 CO2e"],
  [/지표 톤/gi, "미터톤"],
  [/square meter/gi, "제곱미터"],
  [/square foot/gi, "제곱피트"],
  [/barrel 의 석유 동등한 \(BOE\)/gi, "석유환산배럴(BOE)"],
  [/billion \(통화\) funds under 관리/gi, "운용자산 10억(통화)"],
  [/liter 의 제품/gi, "제품 리터"],
  [/ounce 의 gold/gi, "금 온스"],
  [/ounce 의 platinum/gi, "백금 온스"],
  [/단위 hour worked/gi, "근무시간 단위"],
  [/vehicle 생산한/gi, "생산 차량"],
  [/아니요 instruction 에서 관리/gi, "관리 기준 지침 없음"],
  [/No instruction in management/gi, "관리 기준 지침 없음"],
  [/수명 종료 stage/gi, "수명 종료 단계"],
  [/Saint Helena, Ascension 및 Tristan da Cunha/gi, "세인트헬레나, 어센션 및 트리스탄다쿠냐"],
  [/Advanced technologies promotion Subsidy 제도 와\/과 배출 감축 Target \(자산\)/gi, "첨단기술 촉진 보조금 제도 및 배출 감축 목표(자산)"],
  [/Alberta 기술 Innovation 및 배출량 감축 \(TIER\)/gi, "앨버타 기술혁신 및 배출량 감축(TIER)"],
  [/아니요, 당사 않음 anticipate setting 1개 향후 2개 연도s/gi, "아니요, 향후 2년 내 설정할 계획이 없습니다"],
  [/원료취득-공장출하 \+ 수명 종료 단계/gi, "원료취득-공장출하 및 수명 종료 단계"],
  [/Consulting regularly 와\/과 an internal, permanent, subject-expert working group/gi, "내부 상설 주제 전문가 작업반과 정기적으로 협의"],
  [/Social 공약 \| 공약 respect 및 protect customary 권리 land, resources, 및 territory Indigenous Peoples 및 Local Communities/gi, "사회적 약속 | 원주민 및 지역사회의 토지, 자원, 영토에 대한 관습적 권리 존중 및 보호 약속"],
  [/Agreement under United Nations Convention 법률 Sea Conservation 및 지속가능한 사용 Marine Biological Diversity 지역 beyond National Jurisdiction \(BBNJ Agreement\)/gi, "유엔해양법협약상 국가관할권 이원지역 해양생물다양성 보전 및 지속가능한 이용 협정(BBNJ 협정)"],
  [/용량 building \| Develop 또는 distribute 가치사슬 매핑 도구/gi, "역량 구축 | 가치사슬 매핑 도구 개발 또는 배포"],
  [/Substitution hazardous substances 와\/과 less harmful substances/gi, "유해물질을 저유해 물질로 대체"],
  [/미터톤 의 aggregate/gi, "골재 미터톤"],
  [/미터톤 의 aluminum/gi, "알루미늄 미터톤"],
  [/미터톤 의 ore 가공ed/gi, "가공 광석 미터톤"],
  [/기타 \(upstream\)/gi, "기타(업스트림)"],
  [/기타 \(downstream\)/gi, "기타(다운스트림)"],
  [/Land-related 배출량 포함된 기준 목표/gi, "토지 관련 배출량의 목표 포함 여부"],
  [/예, it covers land-related 배출량 만 \(e\.g\. FLAG SBT\)/gi, "예, 토지 관련 배출량만 포함합니다(예: FLAG SBT)"],
  [/예, it covers land-related 및 비land related 배출량 \(e\.g\. SBT approved 이전 release 의 FLAG 목표-setting 가이던스\)/gi, "예, 토지 관련 및 비토지 관련 배출량을 포함합니다(예: FLAG 목표 설정 지침 발표 이전 승인된 SBT)"],
  [/예, it covers land-related 배출량\/제거 관련 bioenergy 및 비land related 배출량 \(e\.g\. 비FLAG SBT bioenergy\)/gi, "예, 바이오에너지 관련 토지 배출량/제거 및 비토지 관련 배출량을 포함합니다(예: 비FLAG SBT 바이오에너지)"],
  [/아니요, it 않음 포함 하나 이상 land-related 배출량 \(e\.g\. 비FLAG SBT\)/gi, "아니요, 토지 관련 배출량을 포함하지 않습니다(예: 비FLAG SBT)"],
  [/목표 derived 사용하여 sectoral decarbonization 접근방식/gi, "섹터별 탈탄소화 접근법으로 도출한 목표"],
  [/목록 배출량 감축 initiatives contributed 대부분의 achieving 이 목표/gi, "이 목표 달성에 가장 크게 기여한 배출량 감축 이니셔티브 목록"],
  [/목록 조치 contributed 대부분의 achieving 이 목표/gi, "이 목표 달성에 가장 크게 기여한 조치 목록"],
  [/설명하십시오 목표 범위 및 식별 하나 이상 exclusions/gi, "목표 범위와 제외사항을 설명하십시오"],
  [/아니요, it's 않음 part 의 overarching initiative/gi, "아니요, 상위 이니셔티브의 일부가 아닙니다"],
  [/Occurrence 의 flaring 생산 및\/또는 가공 활동/gi, "생산 및/또는 가공 활동에서 플레어링 발생 여부"],
  [/예, 모두 비emergency 및 emergency flaring/gi, "예, 비상 및 비비상 플레어링 모두"],
  [/예, 만 emergency flaring/gi, "예, 비상 플레어링만"],
  [/아니요, 당사 않음 사용 flaring/gi, "아니요, 플레어링을 사용하지 않습니다"],
  [/Flaring 감축 목표/gi, "플레어링 감축 목표"],
  [/Flaring 목표 보고된 7\.54\.2/gi, "7.54.2에 보고된 플레어링 목표"],
  [/아니요 flaring 목표 set/gi, "플레어링 목표 미설정"],
  [/Efforts 감축 flaring/gi, "플레어링 감축 노력"],
  [/Improvements 효율/gi, "효율 개선"],
  [/가스 conservation 및 reinjection/gi, "가스 보전 및 재주입"],
  [/아니요 efforts 감축 flaring/gi, "플레어링 감축 노력 없음"],
  [/Involvement voluntary flaring 감축 programs/gi, "자발적 플레어링 감축 프로그램 참여"],
  [/아니요 involvement/gi, "참여 없음"],
  [/주된 이유 않음 setting flaring 감축 목표/gi, "플레어링 감축 목표를 설정하지 않은 주된 이유"],
  [/생물다양성 considerations/gi, "생물다양성 고려사항"],
  [/Efficient equipment 사용/gi, "고효율 장비 사용"],
  [/Equipment maintenance 및 calibration/gi, "장비 유지관리 및 보정"],
  [/Enhanced 산림 regeneration 관행/gi, "산림 재생 관행 강화"],
  [/Fertilizer 관리/gi, "비료 관리"],
  [/Fire 통제/gi, "화재 관리"],
  [/Governmental 또는 institutional 정책 및 programs/gi, "정부 또는 기관 정책 및 프로그램"],
  [/Integrated pest 관리/gi, "통합 병해충 관리"],
  [/낮음 tillage 및 residue 관리/gi, "저경운 및 잔재물 관리"],
  [/Livestock 관리/gi, "가축 관리"],
  [/Manure 관리/gi, "분뇨 관리"],
  [/Nitrogen-fixing plants as 포함 crop/gi, "질소고정 식물을 피복작물로 활용"],
  [/관행 increase wood 생산 및 산림 productivity/gi, "목재 생산 및 산림 생산성 증대 관행"],
  [/Permanent soil 포함 \(포함 포함 crops\)/gi, "영구 토양 피복(피복작물 포함)"],
  [/Pest, disease 및 weed 관리 관행/gi, "병해충 및 잡초 관리 관행"],
  [/Reducing 에너지 사용/gi, "에너지 사용 절감"],
  [/Replacing 화석연료 기준 renewable 에너지 배출원/gi, "화석연료를 재생에너지원으로 대체"],
  [/Restoration degraded lands 및 cultivated organic soils/gi, "훼손 토지 및 경작 유기토양 복원"],
  [/Rice 관리/gi, "벼 재배 관리"],
  [/Seed variety 선택ion/gi, "종자 품종 선택"],
  [/선택ive logging/gi, "선택 벌채"],
  [/Selecting species maximize 탄소 capture/gi, "탄소 흡수를 극대화하는 수종 선택"],
  [/Species 소개/gi, "종 도입"],
  [/Timing 의 farm 운영/gi, "농장 운영 시기 조정"],
  [/Increase 탄소 sink \(완화\)/gi, "탄소 흡수원 증가(완화)"],
  [/Reduced demand 화석연료 \(적응\)/gi, "화석연료 수요 감소(적응)"],
  [/Reduced demand fertilizers \(적응\)/gi, "비료 수요 감소(적응)"],
  [/Reduced demand pesticides \(적응\)/gi, "농약 수요 감소(적응)"],
  [/전과정 단계 대부분의 commonly 포함/gi, "가장 일반적으로 포함되는 전과정 단계"],
  [/내재 탄소 건설 Calculator \(EC3\) 도구/gi, "내재탄소 건설 계산기(EC3) 도구"],
  [/1개 Click LCA/gi, "One Click LCA"],
  [/Whole life 탄소 평가 에 대한 built 환경 \(RICS\)/gi, "건축환경 전과정 탄소 평가(RICS)"],
  [/저탄소 투자 \(LCI\) Registry 택소노미/gi, "저탄소 투자(LCI) 레지스트리 택소노미"],
  [/기후 Bonds 택소노미/gi, "Climate Bonds 택소노미"],
  [/평가 탄소-reducing 영향 의 ICT/gi, "ICT의 탄소 감축 영향 평가"],
  [/정의\(s\) 의 넷제로 탄소 applied/gi, "적용한 넷제로 탄소 정의"],
  [/CaGBC 제로 탄소 Building 기준 - 성과/gi, "CaGBC 제로 탄소 건물 기준 - 성과"],
  [/탄소 neutral 인증 against National 탄소 Offset 기준 Building 통해 NABERS 에너지/gi, "NABERS Energy를 통한 National Carbon Offset Standard Building 기준 탄소중립 인증"],
  [/탄소 neutral 인증 against National 탄소 Offset 기준 Building 통해 Green Star - 성과 아니요vation Ch모든enges/gi, "Green Star Performance Innovation Challenges를 통한 National Carbon Offset Standard Building 기준 탄소중립 인증"],
  [/Science Based Targets initiative/gi, "SBTi"],
  [/Science 기반 Targets initiative/gi, "SBTi"],
  [/Science 기반 목표 initiative/gi, "SBTi"],
  [/과학기반 목표 initiative/gi, "SBTi"],
  [/approved 기준/gi, "승인됨:"],
  [/방법론\/기준\/tools applied/gi, "적용한 방법론/기준/도구"],
  [/기술\/Science/gi, "기술/과학"],
  [/Change 방법론/gi, "방법론 변경"],
  [/Change 경계/gi, "경계 변경"],
  [/Change topography 또는 landscapes/gi, "지형 또는 경관 변경"],
  [/Land 사용 change/gi, "토지 이용 변화"],
  [/target derived 사용하여 sectoral decarbonization 접근방식/gi, "섹터별 탈탄소화 접근법으로 도출한 목표"],
  [/Board of directors or equivalent governing body/gi, "이사회 또는 이에 상응하는 감독기구"],
  [/board or equivalent governing body/gi, "이사회 또는 이에 상응하는 감독기구"],
  [/equivalent governing body/gi, "이에 상응하는 감독기구"],
  [/Board-level oversight/gi, "이사회 수준의 감독"],
  [/board-level oversight/gi, "이사회 수준의 감독"],
  [/board diversity and inclusion policy/gi, "이사회 다양성 및 포용 정책"],
  [/diversity and inclusion policy/gi, "다양성 및 포용 정책"],
  [/Executive directors?/gi, "상임이사"],
  [/Non-executive directors?/gi, "비상임이사"],
  [/Independent non-executive directors?/gi, "독립적인 사외이사"],
  [/directors?/gi, "이사"],
  [/governing body/gi, "감독기구"],
  [/publicly available/gi, "공개됨"],
  [/not publicly available/gi, "비공개"],
  [/Frequency with which/gi, "회의 빈도"],
  [/Frequency/gi, "빈도"],
  [/policy covers/gi, "정책 적용 대상"],
  [/Attach the policy/gi, "정책 첨부"],
  [/Briefly describe/gi, "간략히 설명"],
  [/comprised of/gi, "구성"],
  [/or equivalent/gi, "또는 이에 상응하는 직책"],
  [/environmental issue/gi, "환경이슈"],
  [/Primary reason for no/gi, "없는 주된 이유"],
  [/Explain why/gi, "이유 설명"],
  [/within the next two years/gi, "향후 2년 이내"],
  [/internal resources, capabilities, or expertise/gi, "내부 자원, 역량 또는 전문성"],
  [/organization size/gi, "조직 규모"],
  [/standardized procedure/gi, "표준화된 절차"],
  [/immediate strategic priority/gi, "전략적 최우선 순위"],
  [/Judged to be unimportant or not relevant/gi, "중요하지 않거나 관련 없다고 판단함"],
  [/귀사 귀사의/gi, "귀사의"],
  [/와\/과/gi, "및"],
  [/에 대한\s+/gi, ""],
  [/\bEngagement\b/gi, "참여"],
  [/\bengaging\b/gi, "참여"],
  [/\bstakeholders?\b/gi, "이해관계자"],
  [/\bpolicy makers\b/gi, "정책입안자"],
  [/\bmakers\b/gi, "입안자"],
  [/\bpolicies\b/gi, "정책"],
  [/\blaws\b/gi, "법률"],
  [/\bregulations\b/gi, "규제"],
  [/\brequirements\b/gi, "요구사항"],
  [/\brequirement\b/gi, "요구사항"],
  [/\bmechanisms\b/gi, "메커니즘"],
  [/\bmechanism\b/gi, "메커니즘"],
  [/\bmonitoring\b/gi, "모니터링"],
  [/\bcompliance\b/gi, "준수"],
  [/\baccountability\b/gi, "책임"],
  [/\bresponsibility\b/gi, "책임"],
  [/\bcommittees\b/gi, "위원회"],
  [/\bcommittee\b/gi, "위원회"],
  [/\bindividuals\b/gi, "개인"],
  [/\bindividual\b/gi, "개인"],
  [/\bposition\b/gi, "직책"],
  [/\bpositions\b/gi, "직책"],
  [/\bscheduled agenda item\b/gi, "정기 안건"],
  [/\bagenda item\b/gi, "안건"],
  [/\bfunding\b/gi, "자금 지원"],
  [/\baim\b/gi, "목적"],
  [/\binfluence\b/gi, "영향"],
  [/\bDescribe\b/gi, "설명하십시오"],
  [/\bState\b/gi, "기재하십시오"],
  [/\bpublication\b/gi, "발간물"],
  [/\bin line with\b/gi, "부합하는"],
  [/\bline\b/gi, "부합"],
  [/\buncertainties\b/gi, "불확실성"],
  [/\bconstraints\b/gi, "제약 조건"],
  [/\bconjunction\b/gi, "함께"],
  [/\bfeedback collection\b/gi, "피드백 수집"],
  [/\bcollection\b/gi, "수집"],
  [/\bkey assumptions\b/gi, "주요 가정"],
  [/\bkey\b/gi, "주요"],
  [/\brelies\b/gi, "의존"],
  [/\bAgriculture\b/gi, "농업"],
  [/\bforestry\b/gi, "임업"],
  [/\bland sector\b/gi, "토지 부문"],
  [/\bland\b/gi, "토지"],
  [/\bnumerator\b/gi, "분자"],
  [/\bGross global combined\b/gi, "전 세계 총 합산"],
  [/\bglobal combined\b/gi, "전 세계 합산"],
  [/\bGross\b/gi, "총"],
  [/\bgross\b/gi, "총"],
  [/\bNet\b/gi, "순"],
  [/\bnet\b/gi, "순"],
  [/\bAbsolute\b/gi, "절대량"],
  [/\babsolute\b/gi, "절대량"],
  [/\bbased\b/gi, "기준"],
  [/\bgeneration\b/gi, "발전량"],
  [/\belectricity\b/gi, "전력"],
  [/\bhydrocarbon\b/gi, "탄화수소"],
  [/\bcategory\b/gi, "카테고리"],
  [/\bcategories\b/gi, "카테고리"],
  [/\bspecified\b/gi, "지정한"],
  [/\bcrude steel production\b/gi, "조강 생산"],
  [/\bcrude steel\b/gi, "조강"],
  [/\bproduction\b/gi, "생산"],
  [/\bapplied\b/gi, "적용한"],
  [/\bchanges\b/gi, "변경사항"],
  [/\bchange\b/gi, "변경"],
  [/\bstandards\b/gi, "기준"],
  [/\bused\b/gi, "사용한"],
  [/\bsold products\b/gi, "판매 제품"],
  [/\bVehicle unit sales\b/gi, "차량 판매 대수"],
  [/\bVehicle lifetime\b/gi, "차량 수명"],
  [/\bVehicle\b/gi, "차량"],
  [/\bsales\b/gi, "판매"],
  [/\blifetime\b/gi, "수명"],
  [/\bAnnual distance\b/gi, "연간 주행거리"],
  [/\bmiles\b/gi, "마일"],
  [/\bunit\b/gi, "단위"],
  [/\bexclusions\b/gi, "제외사항"],
  [/\bcoverage\b/gi, "적용 범위"],
  [/\btransport\b/gi, "운송"],
  [/\bselected\b/gi, "선택한"],
  [/\bScopes\b/gi, "Scope"],
  [/\bscopes\b/gi, "Scope"],
  [/\bintensity figure\b/gi, "집약도 수치"],
  [/\bIntensity figure\b/gi, "집약도 수치"],
  [/\bintensity\b/gi, "집약도"],
  [/\banticipated\b/gi, "예상되는"],
  [/\bdirection\b/gi, "방향"],
  [/\breviews\b/gi, "검토"],
  [/\binterim target\b/gi, "중간 목표"],
  [/\binterim\b/gi, "중간"],
  [/\bEnd\b/gi, "종료"],
  [/\bTaxonomy\b/gi, "분류체계"],
  [/\btaxonomy\b/gi, "분류체계"],
  [/\bframework\b/gi, "프레임워크"],
  [/\bgreen finance\b/gi, "녹색금융"],
  [/\bAggregation weighting\b/gi, "집계 가중치"],
  [/\baggregation\b/gi, "집계"],
  [/\bweighting\b/gi, "가중치"],
  [/\bTarget set\b/gi, "목표 설정"],
  [/\bprogress\b/gi, "진행상황"],
  [/\btracked\b/gi, "추적"],
  [/\brenewables\b/gi, "재생에너지"],
  [/\brenewable\b/gi, "재생에너지"],
  [/\bAlternative\b/gi, "대체"],
  [/\battribute certificate systems\b/gi, "속성 인증서 제도"],
  [/\bcertificate systems\b/gi, "인증서 제도"],
  [/\bGreen 전력 tariffs\/재생에너지 에너지 PPAs/gi, "녹색 전력요금/재생에너지 PPA"],
  [/\btariffs\b/gi, "요금"],
  [/\bPPAs\b/gi, "PPA"],
  [/\bnon-renewable\b/gi, "비재생에너지"],
  [/\bMinimum\b/gi, "최소"],
  [/\bcapacity\b/gi, "용량"],
  [/\bprotection\b/gi, "보호"],
  [/\bprocedures\b/gi, "절차"],
  [/\bregistries\b/gi, "등록부"],
  [/\bFinancing\b/gi, "금융"],
  [/\bincentivizing\b/gi, "인센티브 제공"],
  [/\bFishery\b/gi, "어업"],
  [/\bclosure\b/gi, "폐쇄"],
  [/\bAllowable Catches\b/gi, "허용어획량"],
  [/\bsetting\b/gi, "설정"],
  [/\bquota allocation\b/gi, "쿼터 배분"],
  [/\bprivate reserves\b/gi, "사유 보호구역"],
  [/\bProtected Areas\b/gi, "보호지역"],
  [/\bProtected 지역/gi, "보호지역"],
  [/\bLandscape\b/gi, "경관"],
  [/\briver basin\b/gi, "유역"],
  [/\bjurisdictional approaches\b/gi, "관할권 접근방식"],
  [/\bLegal reserves\b/gi, "법정 보호구역"],
  [/\bMarine Protected Area\b/gi, "해양보호구역"],
  [/\bdesignation\b/gi, "지정"],
  [/\bmaintenance\b/gi, "유지관리"],
  [/\bpermits\b/gi, "허가"],
  [/\bPeatland\b/gi, "이탄지"],
  [/\bProvision\b/gi, "제공"],
  [/\bexploration licenses\b/gi, "탐사 면허"],
  [/\bRestoration\/ rehabilitation\b/gi, "복원/재활"],
  [/\bResilience\b/gi, "회복탄력성"],
  [/\badaptive\b/gi, "적응"],
  [/\bShipping lane\b/gi, "항로"],
  [/\bspeed\b/gi, "속도"],
  [/\bSocio-경제적\b/gi, "사회경제적"],
  [/\bland-사용 planning\b/gi, "토지이용 계획"],
  [/\bTransboundary\b/gi, "초국경"],
  [/\bFinancial mechanisms\b/gi, "재무 메커니즘"],
  [/\bmechanisms\b/gi, "메커니즘"],
  [/\be\.g\./gi, "예:"],
  [/\btaxes\b/gi, "세금"],
  [/\bsubsidies\b/gi, "보조금"],
  [/\bSubsidies\b/gi, "보조금"],
  [/\bintensive crops\b/gi, "집약 작물"],
  [/\bintensive production\b/gi, "집약 생산"],
  [/\bsoil health\b/gi, "토양 건강"],
  [/\bsoil contamination\b/gi, "토양 오염"],
  [/\bwater-stressed\b/gi, "물 스트레스"],
  [/\bpollution\b/gi, "오염"],
  [/\bfertilizer runoff\b/gi, "비료 유출"],
  [/\bdeforestation\b/gi, "산림전용"],
  [/\bconversion\b/gi, "전환"],
  [/\bnatural ecosystems\b/gi, "자연 생태계"],
  [/\boffsets\b/gi, "상쇄"],
  [/\btaxes\b/gi, "세금"],
  [/\bschemes\b/gi, "제도"],
  [/\bFines, enforcement orders 및\/또는 penalties\b/gi, "벌금, 집행명령 및/또는 과태료"],
  [/\bpenalties\b/gi, "과태료"],
  [/\benforcement orders\b/gi, "집행명령"],
  [/\bFines\b/gi, "벌금"],
  [/\brelating to\b/gi, "관련"],
  [/\bmarine\b/gi, "해양"],
  [/\bhigh\b/gi, "높은"],
  [/\bincreased\b/gi, "증가한"],
  [/\bIncreased\b/gi, "증가한"],
  [/\bimplementation\b/gi, "이행"],
  [/\bImplementation\b/gi, "이행"],
  [/\bemployee awareness campaign\b/gi, "직원 인식 제고 캠페인"],
  [/\btraining program\b/gi, "교육 프로그램"],
  [/\bShort-Term Incentive Plan\b/gi, "단기 인센티브 제도"],
  [/\bLong-Term Incentive Plan\b/gi, "장기 인센티브 제도"],
  [/\bShort-Term\b/gi, "단기"],
  [/\bLong-Term\b/gi, "장기"],
  [/\bIncentive Plan\b/gi, "인센티브 제도"],
  [/\bannual bonus\b/gi, "연간 보너스"],
  [/\bmulti-연도 bonus\b/gi, "다년 보너스"],
  [/\bbonus\b/gi, "보너스"],
  [/\bfacilities\b/gi, "시설"],
  [/\bbusinesses\b/gi, "사업"],
  [/\bgeographies\b/gi, "지역"],
  [/\btarget date\b/gi, "목표일"],
  [/\bArctic\b/gi, "북극"],
  [/\bFracked\b/gi, "수압파쇄"],
  [/\bCovenants\b/gi, "약정"],
  [/\bInternational Association\b/gi, "국제협회"],
  [/\bInternational Council\b/gi, "국제협의회"],
  [/\bProducers\b/gi, "생산자"],
  [/\bMetals\b/gi, "금속"],
  [/\bDecarbonization Charter\b/gi, "탈탄소화 헌장"],
  [/\bMethane Partnership\b/gi, "메탄 파트너십"],
  [/\bConserve\b/gi, "보전"],
  [/\bProtection\b/gi, "보호"],
  [/\bInclusion\b/gi, "포용"],
  [/\bScience-Based Targets for Nature\b/gi, "자연 과학기반목표"],
  [/\bNo, neither my 조직 또는 intermediary 조직 당사 engage 통해 registered\b/gi, "아니요, 당사 또는 당사가 참여하는 중개 조직 모두 등록되어 있지 않습니다"],
  [/\bintermediary\b/gi, "중개"],
  [/\bregistered\b/gi, "등록됨"],
  [/\bneither\b/gi, "둘 다 아님"],
  [/\bmy 조직\b/gi, "당사"],
  [/\bengage 통해\b/gi, "통해 참여"],
  [/\bmaintain an environmentally competent board\b/gi, "환경 역량을 갖춘 이사회 유지"],
  [/\benvironmentally competent board\b/gi, "환경 역량을 갖춘 이사회"],
  [/\bRationale\b/gi, "근거"],
  [/\bscope\b/g, "범위"],
  [/\bmile\b/gi, "마일"],
  [/\bcompany targets\b/gi, "기업 목표"],
  [/\bcompany\b/gi, "기업"],
  [/comp하나 이상/gi, "기업"],
  [/\btemperature score\b/gi, "온도 점수"],
  [/산정d/gi, "산정된"],
  [/\bagainst it\b/gi, "대비"],
  [/\bachieving\b/gi, "달성"],
  [/\bbeyond\b/gi, "밖"],
  [/\brevision\b/gi, "수정"],
  [/\bretirement\b/gi, "폐기"],
  [/\breviewing\b/gi, "검토"],
  [/\blinked\b/gi, "연계된"],
  [/\bactive\b/gi, "활성"],
  [/\binitiatives\b/gi, "이니셔티브"],
  [/\binitiative\b/gi, "이니셔티브"],
  [/\bannual\b/gi, "연간"],
  [/\bsavings\b/gi, "절감량"],
  [/\btonnes\b/gi, "톤"],
  [/\brequired\b/gi, "필요"],
  [/\bPayback\b/gi, "회수"],
  [/\bperiod\b/gi, "기간"],
  [/\boccur\b/gi, "발생"],
  [/\boccurs\b/gi, "발생"],
  [/\bOccurrence\b/gi, "발생 여부"],
  [/\beffect occurring\b/gi, "영향 발생"],
  [/\bdecrease\b/gi, "감소"],
  [/\bincrease\b/gi, "증가"],
  [/\bmix\b/gi, "구성"],
  [/\bDisruption\b/gi, "차질"],
  [/\bworkforce\b/gi, "인력"],
  [/\bplanning\b/gi, "계획"],
  [/\bMine\b/gi, "광산"],
  [/\bMandatory\b/gi, "의무"],
  [/\bconservation\b/gi, "보전"],
  [/\brecycling\b/gi, "재활용"],
  [/\bInadequate\b/gi, "부족한"],
  [/\bsanitation\b/gi, "위생"],
  [/\bhygiene\b/gi, "보건"],
  [/\bFlooding\b/gi, "홍수"],
  [/\bcoastal\b/gi, "해안"],
  [/\bfluvial\b/gi, "하천"],
  [/\bpluvial\b/gi, "강우"],
  [/ground수자원/gi, "지하수"],
  [/\bmacro\b/gi, "대형"],
  [/\bmicroplastic\b/gi, "미세플라스틱"],
  [/\bleakage\b/gi, "누출"],
  [/\bfresh수자원\b/gi, "담수"],
  [/\bbodies\b/gi, "수역"],
  [/\bown\b/gi, "소유"],
  [/\bbanking\b/gi, "은행"],
  [/\bunderwriting\b/gi, "인수"],
  [/\bRegular training\b/gi, "정기 교육"],
  [/\btraining\b/gi, "교육"],
  [/\bintroduce\b/gi, "도입"],
  [/\bSenior-mid\b/gi, "고위-중간"],
  [/\bHealth\b/gi, "보건"],
  [/\bSafety\b/gi, "안전"],
  [/\bSocial\b/gi, "사회"],
  [/\bQuality\b/gi, "품질"],
  [/\bBoard approval\b/gi, "이사회 승인"],
  [/\bShareholder approval\b/gi, "주주 승인"],
  [/\bAchievement\b/gi, "달성"],
  [/\bgreen asset ratio\b/gi, "녹색자산 비율"],
  [/\bratio\b/gi, "비율"],
  [/\bfund\b/gi, "펀드"],
  [/\bShift\b/gi, "전환"],
  [/\bcompatible\b/gi, "부합하는"],
  [/\bmodel\b/gi, "모델"],
  [/\binnovation\b/gi, "혁신"],
  [/\bproportion\b/gi, "비율"],
  [/\blow environmental impact\b/gi, "환경 영향이 낮은"],
  [/\bcapex\b/gi, "자본지출"],
  [/\bfinance\b/gi, "금융"],
  [/\bmobilised\b/gi, "동원"],
  [/\btowards\b/gi, "대상"],
  [/\bResource use and efficiency\b/gi, "자원 사용 및 효율"],
  [/\bResource 사용 및 효율\b/gi, "자원 사용 및 효율"],
  [/\bresource 사용 및 효율-related\b/gi, "자원 사용 및 효율 관련"],
  [/\bReduction\b/gi, "감축"],
  [/\bwithdrawals\b/gi, "취수량"],
  [/\bwithdrawal\b/gi, "취수량"],
  [/\bImprovements\b/gi, "개선"],
  [/\bimprovement\b/gi, "개선"],
  [/\bverification\b/gi, "검증"],
  [/\bphase out\b/gi, "단계적 폐지"],
  [/\bhazardous substances\b/gi, "유해물질"],
  [/\bIncrease discharge treatment\b/gi, "배출수 처리 강화"],
  [/\bmeeting\b/gi, "충족"],
  [/\btighter\b/gi, "강화된"],
  [/\bpurchasing\b/gi, "구매"],
  [/\bSecuring Free, Prior 및 반영된 Consent\b/gi, "자유의사에 따른 사전인지동의 확보"],
  [/\bIndigenous peoples 및 local communities\b/gi, "원주민 및 지역사회"],
  [/\bAdopting\b/gi, "채택"],
  [/\bprinciples\b/gi, "원칙"],
  [/\bcommunity\b/gi, "지역사회"],
  [/\bworkplace\b/gi, "사업장"],
  [/\bsmallholders\b/gi, "소규모 농가"],
  [/\bcustomers\b/gi, "고객"],
  [/\binvestee\b/gi, "투자대상"],
  [/\bIncentive\b/gi, "인센티브"],
  [/\bno 산림전용\b/gi, "산림전용 금지"],
  [/\bno planting peatlands\b/gi, "이탄지 식재 금지"],
  [/\bno exploitation\b/gi, "착취 금지"],
  [/\bGlobal Initiative\b/gi, "글로벌 이니셔티브"],
  [/\bGrids\b/gi, "전력망"],
  [/\bPartnership\b/gi, "파트너십"],
  [/\bResponsible\b/gi, "책임 있는"],
  [/\bInitiative\b/gi, "이니셔티브"],
  [/\bgrowing\b/gi, "재배"],
  [/\bintensive\b/gi, "집약적"],
  [/\b영향s\b/g, "영향"],
  [/\betc\./gi, "등"],
  [/\(예:,\s*/g, "(예: "],
  [/\srelated\b/gi, " 관련"],
  [/\benergy-related\b/gi, "에너지 관련"],
  [/\bPower\b/gi, "전력"],
  [/\bpower\b/gi, "전력"],
  [/\bplant\b/gi, "발전소"],
  [/\bDry 스팀\b/gi, "건식 증기"],
  [/\bFlash 스팀\b/gi, "플래시 증기"],
  [/\bgeothermal\b/gi, "지열"],
  [/\bGeothermal\b/gi, "지열"],
  [/\bLarge-scale\b/gi, "대규모"],
  [/\blight-수자원 nuclear reactor\b/gi, "경수로 원자로"],
  [/\bnuclear reactor\b/gi, "원자로"],
  [/\bLiquid air\b/gi, "액화공기"],
  [/\bInsulation\b/gi, "단열"],
  [/\bprogram\b/gi, "프로그램"],
  [/\bDraught proofing\b/gi, "외풍 차단"],
  [/\bSolar shading\b/gi, "태양 차폐"],
  [/\bBuilding\b/gi, "건물"],
  [/\bbuildings\b/gi, "건물"],
  [/\bSystems\b/gi, "시스템"],
  [/\bGeneral 기준\b/gi, "일반 기준"],
  [/\bproductivity\b/gi, "생산성"],
  [/\bunits\b/gi, "단위"],
  [/\bounces\b/gi, "온스"],
  [/\bgold\b/gi, "금"],
  [/\bplatinum\b/gi, "백금"],
  [/\bvalue-added\b/gi, "부가가치"],
  [/\bDry\b/gi, "건식"],
  [/\bFlash\b/gi, "플래시"],
  [/\bFlywheel\b/gi, "플라이휠"],
  [/Ge기타mal/gi, "지열"],
  [/\bbioenergy\b/gi, "바이오에너지"],
  [/\bnon-fossil\b/gi, "비화석"],
  [/\bgaseous\b/gi, "기체"],
  [/\bliquid\b/gi, "액체"],
  [/\bCogeneration\b/gi, "열병합"],
  [/\bcool\b/gi, "냉방"],
  [/\bHeating\b/gi, "난방"],
  [/\bVentilation\b/gi, "환기"],
  [/\bAir Conditioning\b/gi, "공조"],
  [/\bLighting\b/gi, "조명"],
  [/\bMotors\b/gi, "모터"],
  [/\bdrives\b/gi, "구동장치"],
  [/\bAluminium\b/gi, "알루미늄"],
  [/\bStewardship\b/gi, "관리"],
  [/\bAttestation\b/gi, "증명"],
  [/\bestablished\b/gi, "수립된"],
  [/\bAmerican Institute Certified Public Accountants\b/gi, "미국공인회계사협회"],
  [/\bCanadian\b/gi, "캐나다"],
  [/\bAssurance 인게이지먼트s\b/gi, "인증 업무"],
  [/\bClassification\b/gi, "분류"],
  [/\bIdentification\b/gi, "식별"],
  [/\btailings dams\b/gi, "광미댐"],
  [/\bdata points\b/gi, "데이터 포인트"],
  [/\bdata point\b/gi, "데이터 포인트"],
  [/\bOffset\b/gi, "상쇄"],
  [/\bRegistry\b/gi, "등록부"],
  [/\bAmerican 탄소 Registry\b/gi, "미국 탄소 등록부"],
  [/\bBioCarbon\b/gi, "바이오카본"],
  [/\bresilient\b/gi, "회복력 있는"],
  [/\bdigital\b/gi, "디지털"],
  [/\bcommunication\b/gi, "통신"],
  [/\binfrastructure\b/gi, "인프라"],
  [/\bfood\b/gi, "식량"],
  [/\btransfer\b/gi, "이전"],
  [/\bsolutions\b/gi, "솔루션"],
  [/\bsolution\b/gi, "솔루션"],
  [/\bBioenergy\b/gi, "바이오에너지"],
  [/\bBiomass\b/gi, "바이오매스"],
  [/\bcapture\b/gi, "포집"],
  [/\bbed\b/gi, "층"],
  [/\bvehicles\b/gi, "차량"],
  [/\bCCGT 발전량\b/gi, "CCGT 발전"],
  [/\bNational\b/gi, "국가"],
  [/\bChallenges\b/gi, "챌린지"],
  [/\bPositive\b/gi, "포지티브"],
  [/\bBrazil\b/gi, "브라질"],
  [/\bMillion\b/gi, "백만"],
  [/\binvested\b/gi, "투자액"],
  [/\bfootprint\b/gi, "발자국"],
  [/\bAvoided\b/gi, "회피"],
  [/\bFacilitated\b/gi, "촉진"],
  [/\bbarrels\b/gi, "배럴"],
  [/\bThroughput\b/gi, "처리량"],
  [/\bcardboard\b/gi, "판지"],
  [/ore 프로세스ed/gi, "가공 광석"],
  [/\bkilometers\b/gi, "킬로미터"],
  [/\bHydropower\b/gi, "수력발전"],
  [/\bLithium-ion batteries\b/gi, "리튬이온 배터리"],
  [/\bMulti-junction 셀\b/gi, "다중접합 셀"],
  [/\bCombined 열 및 전력\b/gi, "열병합"],
  [/\bWaste 열 recovery\b/gi, "폐열 회수"],
  [/\boptimization\b/gi, "최적화"],
  [/\bAirport\b/gi, "공항"],
  [/\bsolar\b/gi, "태양광"],
  [/\bComputer programming, consultancy\b/gi, "컴퓨터 프로그래밍, 컨설팅"],
  [/\bgreen\b/gi, "녹색"],
  [/\bMarkets\b/gi, "시장"],
  [/\bEasier access\b/gi, "더 쉬운 접근"],
  [/\bavailable credit\b/gi, "이용 가능한 신용"],
  [/\bcredit\b/gi, "신용"],
  [/\bdemand\b/gi, "수요"],
  [/\bcertified\b/gi, "인증된"],
  [/\bmaterials\b/gi, "원재료"],
  [/\bdiversification\b/gi, "다변화"],
  [/\bbonds\b/gi, "채권"],
  [/\bEcosystem\b/gi, "생태계"],
  [/\bEmerging\b/gi, "신흥"],
  [/\bbackup\b/gi, "백업"],
  [/\bAgencies\b/gi, "기관"],
  [/\bGovernment\b/gi, "정부"],
  [/\bClean cookstove\b/gi, "청정 조리기기"],
  [/\bDirect air\b/gi, "직접공기"],
  [/\bhouseholds\b/gi, "가구"],
  [/모든iance/gi, "연합"],
  [/\balliance\b/gi, "연합"],
  [/\bdeveloped 기준\b/gi, "개발:"],
  [/\bpoints\b/gi, "포인트"],
  [/\bpoint\b/gi, "포인트"],
  [/Multi-junction 셀/gi, "다중접합 셀"],
  [/\bOnshore wind\b/gi, "육상풍력"],
  [/\bOrganic Rankine cycle\b/gi, "유기 랭킨 사이클"],
  [/\bpassenger\b/gi, "승객"],
  [/\bliters\b/gi, "리터"],
  [/\bGeneral\b/gi, "일반"],
  [/\bCertified Public Accountants\b/gi, "공인회계사"],
  [/\bPublic Accountants\b/gi, "공인회계사"],
  [/\bSustainability\b/gi, "지속가능성"],
  [/\bCombined 열 및 전력\b/gi, "열병합"],
  [/\bfuel switch\b/gi, "연료 전환"],
  [/\bCompressed air\b/gi, "압축공기"],
  [/\bexternalities\b/gi, "외부효과"],
  [/\bspending\b/gi, "지출"],
  [/\battribute certificates\b/gi, "속성 인증서"],
  [/\bsafe\b/gi, "안전한"],
  [/\bnuclear\b/gi, "원자력"],
  [/\bplants\b/gi, "발전소"],
  [/\bhydrogen\b/gi, "수소"],
  [/\bbest-available\b/gi, "최적가용"],
  [/\btechnologies\b/gi, "기술"],
  [/\bextension\b/gi, "확장"],
  [/\bwaste 수자원\b/gi, "폐수"],
  [/\btreatment\b/gi, "처리"],
  [/\bsupply\b/gi, "공급"],
  [/\bResource 사용\b/gi, "자원 사용"],
  [/\blocal\b/gi, "지역"],
  [/\bregional\b/gi, "광역"],
  [/\bFast 식량\b/gi, "패스트푸드"],
  [/\brestoration\b/gi, "복원"],
  [/\bmeasures\b/gi, "조치"],
  [/\bdecentralization\b/gi, "분산화"],
  [/\b또는\s*,/gi, "또는"],
  [/Resource 사용 및 효율/gi, "자원 사용 및 효율"],
  [/전략 및 재무 계획-related/gi, "전략 및 재무 계획 관련"],
  [/\bParabolic trough\b/gi, "포물선형 집광"],
  [/\bPumped 저장\b/gi, "양수 저장"],
  [/\bSeabed fixed offshore wind turbine\b/gi, "해저 고정식 해상풍력 터빈"],
  [/\bsquare feet\b/gi, "제곱피트"],
  [/\bmegawatt hours\b/gi, "메가와트시"],
  [/\bbarrel의 석유 equivalents\b/gi, "석유환산배럴"],
  [/\bBOE\b/gi, "BOE"],
  [/\bswitch\b/gi, "전환"],
  [/\bagainst targets\b/gi, "목표 대비"],
  [/\bcarbon credits\b/gi, "탄소 크레딧"],
  [/\bbest-available\b/gi, "최적가용"],
  [/\bwaste 수자원\b/gi, "폐수"],
  [/\bCreative, arts 및 entertainment\b/gi, "창작, 예술 및 엔터테인먼트"],
  [/\bAlberta\b/gi, "앨버타"],
  [/\bAmerican 탄소 등록부\b/gi, "미국 탄소 등록부"],
  [/\bbanks\b/gi, "은행"],
  [/\bBiofuel\b/gi, "바이오연료"],
  [/\bsupply\b/gi, "공급"],
  [/\bManaging\b/gi, "관리"],
  [/\bConducting\b/gi, "수행"],
  [/\bDeveloping a\b/gi, "개발"],
  [/\blandscapes\b/gi, "경관"],
  [/\bjurisdictions\b/gi, "관할권"],
  [/\s+의\s+/g, "의 "],
  [/\s+기준\s+/g, " 기준 "],
  [/\s{2,}/g, " "],
];

function fieldKey(value) {
  return String(value ?? "")
    .replace(/[\u00a0\u202f]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function directExactFieldTranslation(value) {
  const key = fieldKey(value);
  return KO_FIELD_EXACT.get(key) || KO_STANDARD_EXACT.get(key) || "";
}

function segmentedExactFieldTranslation(value) {
  const key = fieldKey(value);
  if (!key.includes("|")) return "";
  const parts = key.split("|").map((part) => fieldKey(part)).filter(Boolean);
  if (parts.length < 2) return "";
  const translated = parts.map((part) => directExactFieldTranslation(part));
  if (!translated.every(Boolean)) return "";
  return translated.join(" | ");
}

function exactFieldTranslation(value) {
  const key = fieldKey(value);
  return directExactFieldTranslation(key) || segmentedExactFieldTranslation(key);
}

function normalizeFieldKorean(value, original = "") {
  let out = String(value ?? "");
  const exact = exactFieldTranslation(original) || exactFieldTranslation(out);
  if (exact) return exact;
  for (const [pattern, replacement] of KO_FIELD_REPLACEMENTS) out = out.replace(pattern, replacement);
  return displayText(out)
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function isNarrativeColumn(column) {
  return /RICH_TEXT/i.test(String(column?.type || ""));
}

function characterLimitText(values) {
  const source = values.filter(Boolean).join("\n");
  const patterns = [
    /(?:maximum|max(?:imum)?\.?|up to|limit(?:ed)? to|최대|제한)[^\n.]{0,80}?(\d{1,3}(?:,\d{3})?)\s*(?:characters?|글자|자)/gi,
    /(\d{1,3}(?:,\d{3})?)\s*(?:characters?|글자|자)[^\n.]{0,60}?(?:maximum|max|limit|제한|허용)/gi,
  ];
  const matches = [];
  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      const value = match[1];
      if (value && !matches.includes(value)) matches.push(value);
    }
  }
  if (!matches.length) return "";
  return matches.map((value) => `${value} ${state.lang === "ko" ? "영문자" : "characters"}`).join(", ");
}

function columnInputGuide(column, detail) {
  const type = String(column?.type || "").toUpperCase();
  if (isNarrativeColumn(column)) {
    const limit = characterLimitText([
      column.text,
      column.textKo,
      detail?.simpleHelp,
      detail?.simpleHelpKo,
      ...(detail?.guidance || []).map((item) => item.text),
      ...(detail?.guidance || []).map((item) => item.textKo),
    ]);
    return limit ? `${t("narrativeGuideWithLimit")}: ${limit}` : t("narrativeGuideMissing");
  }
  if (/SELECT|OPTIONS/.test(type)) return t("selectGuide");
  if (/NUMERIC/.test(type)) return t("numericGuide");
  if (/DATE/.test(type)) return t("dateGuide");
  if (/ATTACHMENT/.test(type)) return t("attachmentGuide");
  return "-";
}

function identifierRangeLabel(options) {
  const parsed = (options || [])
    .map((option) => {
      const match = String(option || "").trim().match(/^([A-Za-z]+)\s*([0-9]+)$/);
      return match ? { raw: String(option).trim(), prefix: match[1], number: Number(match[2]) } : null;
    })
    .filter(Boolean);
  if (parsed.length < 10 || parsed.length !== (options || []).length) return "";
  const prefix = parsed[0].prefix;
  if (!parsed.every((item) => item.prefix.toLowerCase() === prefix.toLowerCase())) return "";
  const numbers = parsed.map((item) => item.number).sort((a, b) => a - b);
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] !== numbers[index - 1] + 1) return "";
  }
  const displayPrefix = state.lang === "ko" ? prefix.toUpperCase() : prefix;
  const separator = state.lang === "ko" ? "~" : "-";
  const suffix = state.lang === "ko" ? `${numbers.length}개까지 가능` : `up to ${numbers.length} identifiers`;
  return `${displayPrefix}${numbers[0]}${separator}${displayPrefix}${numbers[numbers.length - 1]} (${suffix})`;
}

function optionDisplayItems(options, optionsKo) {
  const rangeLabel = identifierRangeLabel(options);
  if (rangeLabel) return [{ label: rangeLabel, compressed: true }];
  return (options || []).map((option, index) => ({ label: optionText(option, optionsKo?.[index]), original: option, compressed: false }));
}

function changedSource(detail) {
  const change = detail?.change || {};
  return [change.change_summary, change.detail_change_types, change.scoring_change_summary].filter(Boolean).join("\n");
}

function changedQuotedTerms(detail) {
  return [...changedSource(detail).matchAll(/[\"'‘’“”]([^\"'‘’“”]{2,160})[\"'‘’“”]/g)]
    .map((match) => fieldKey(match[1]).toLowerCase())
    .filter(Boolean);
}

function textMatchesChangedTerms(value, terms) {
  const text = fieldKey(value).toLowerCase();
  if (!text || !terms.length) return false;
  return terms.some((term) => term === text || text.includes(term) || term.includes(text));
}

function isChangedColumn(detail, column) {
  const change = detail?.change || {};
  if (!change.changed_response) return false;
  const terms = changedQuotedTerms(detail);
  if (!terms.length) return true;
  return textMatchesChangedTerms(column?.text, terms) || textMatchesChangedTerms(column?.code, terms);
}

function isChangedOption(detail, option) {
  const change = detail?.change || {};
  if (!change.changed_options) return false;
  const terms = changedQuotedTerms(detail);
  return textMatchesChangedTerms(option, terms);
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
  const value = state.lang === "ko" ? change?.review_statusKo || change?.review_status || "" : change?.review_statusEn || change?.review_status || "";
  if (state.lang === "ko" && (value === "변경됨 및" || value === "Changed and reflected")) return "변경 반영";
  return state.lang === "ko" ? displayText(value) : value;
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
      const title = questionListTitle(question);
      return `<button class="question-row ${state.density === "compact" ? "compact" : ""} ${question.code === state.selectedCode ? "active" : ""}" data-code="${escapeHtml(question.code)}" type="button">
        <div class="question-topline">
          <span class="q-code">M${escapeHtml(question.code)}</span>
          <span class="row-chip-group">${favoriteChip}${changedChip}</span>
        </div>
        <div class="q-title">${escapeHtml(compact(title, state.density === "compact" ? 90 : 150))}</div>
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
  const title = detailTitle(detail);
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
          <div class="q-meta">${chip(changeStatusDisplay(change) || "-", detail.change?.review_status === "변경 반영" ? "changed" : "ok")}</div>
          <button class="text-button favorite-button ${isFavorite ? "active" : ""}" id="favoriteQuestionButton" type="button">${escapeHtml(isFavorite ? t("removeFavorite") : t("addFavorite"))}</button>
          <button class="text-button share-button" id="copyQuestionLink" type="button">${escapeHtml(t("copyLink"))}</button>
        </div>
      </div>
      <h2 class="detail-title">${escapeHtml(title)}</h2>
      ${renderSectionNav()}
    </div>

    <section class="detail-section" id="section-basic">
      <h3>${t("basicInfo")}</h3>
      <div class="two-col">
        <div>
          ${renderInfoLines([
            [t("reflectionPlace"), locationLabel(change.location || (detail.module === "7" || detail.module === "12" ? "Excel" : "PPT"))],
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
        [t("changeState"), changeStatusDisplay(change) || "-"],
        [t("detailChangeType"), changeDisplayValue(change, "detail_change_types", "detail_change_typesKo", "type")],
        [t("changeSummary"), changeDisplayValue(change, "change_summary", "change_summaryKo", "summary")],
        [t("scoringChangeSummary"), changeDisplayValue(change, "scoring_change_summary", "scoring_change_summaryKo", "scoring")],
      ])}
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

    <section class="detail-section" id="section-best-guide">
      <h3>${bestGuideText("title")}</h3>
      ${renderBestAnswerGuide(detail)}
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
    ["section-basic", t("basicInfo")],
    ["section-response", t("responseMethod")],
    ["section-change", t("changeStatus")],
    ["section-dropdown", t("dropdownOptions")],
    ["section-table", t("tableStructure")],
    ["section-points", t("pointAllocation")],
    ["section-criteria", t("scoringCriteria")],
    ["section-best-guide", bestGuideText("title")],
    ["section-guidance", t("reportingGuidance")],
  ];
  return `<div class="section-nav" aria-label="${escapeHtml(t("sectionJump"))}">
    ${sections.map(([id, label]) => `<button class="section-link" data-section="${escapeHtml(id)}" type="button">${escapeHtml(label)}</button>`).join("")}
  </div>`;
}

function shouldStackInfoLine(value) {
  const text = String(value ?? "");
  return text.length > 120 || /[\n\r•]/.test(text);
}

function renderInfoLines(rows) {
  return rows
    .map(
      ([label, value]) => `<div class="info-line ${shouldStackInfoLine(value) ? "info-line-block" : ""}">
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
            <thead><tr><th>${t("column")}</th><th>${t("inputType")}</th><th>${t("required")}</th><th>${t("inputGuide")}</th></tr></thead>
            <tbody>
              ${columns
                .map(
                  (column) => `<tr>
                    <td><strong class="${isChangedColumn(detail, column) ? "changed-text" : ""}">${escapeHtml(textBy(column, "text", "textKo"))}</strong>${isChangedColumn(detail, column) ? ` <span class="change-pill">2026 변경</span>` : ""}<br><span class="muted">${escapeHtml(column.code)}</span></td>
                    <td>${escapeHtml(textBy(column, "type", "typeKo"))}</td>
                    <td>${escapeHtml(boolKo(column.mandatory))}</td>
                    <td>${escapeHtml(columnInputGuide(column, detail))}</td>
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
                <span class="${isChangedColumn(detail, column) ? "changed-text" : ""}">${escapeHtml(textBy(column, "text", "textKo"))}</span>${isChangedColumn(detail, column) ? ` <span class="change-pill">2026 변경</span>` : ""}
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
  const optionsChanged = Boolean(detail.change?.changed_options);
  const optionChangeTerms = changedQuotedTerms(detail);
  if (detail.baseOptions?.length) {
    groups.push({
      title: t("questionOptions"),
      changed: optionsChanged,
      optionChanged: optionsChanged,
      options: detail.baseOptions,
      optionsKo: detail.baseOptionsKo || [],
    });
  }
  for (const column of detail.columns || []) {
    if (column.options?.length) {
      groups.push({
        title: `${column.code} · ${textBy(column, "text", "textKo")}`,
        code: column.code,
        changed: isChangedColumn(detail, column) || optionsChanged,
        optionChanged: optionsChanged,
        options: column.options,
        optionsKo: column.optionsKo || [],
      });
    }
  }
  if (!groups.length) return `<p class="text-block muted">${t("noDropdown")}</p>`;
  return groups
    .map((group) => {
      const options = group.options || [];
      const optionsKo = group.optionsKo || [];
      const displayItems = optionDisplayItems(options, optionsKo);
      const isLong = displayItems.length > 60;
      const isCompressed = displayItems.length === 1 && displayItems[0].compressed;
      return `<div class="option-group ${group.changed ? "changed-group" : ""}">
        <h4>${group.changed ? `<span class="changed-text">${escapeHtml(displayText(group.title))}</span>` : escapeHtml(displayText(group.title))}${group.changed ? `<span class="change-pill">2026 변경</span>` : ""}</h4>
        <p class="option-summary">${escapeHtml(isCompressed ? displayItems[0].label : `${options.length}${state.lang === "ko" ? "개 선택지" : " options"}`)}</p>
        ${
          isCompressed
            ? ""
            : `<ul class="${isLong ? "option-list option-list-scroll" : "option-list"}">
          ${displayItems
            .map((item) => {
              const changed =
                group.optionChanged &&
                (!optionChangeTerms.length || textMatchesChangedTerms(item.original, optionChangeTerms));
              return `<li class="${changed ? "changed-option" : ""}"><span>${escapeHtml(item.label)}</span>${changed ? `<span class="change-pill">2026 변경</span>` : ""}</li>`;
            })
            .join("")}
        </ul>`
        }
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

function bestGuideText(key) {
  const dict = BEST_GUIDE_LABELS[state.lang] || BEST_GUIDE_LABELS.en;
  return dict[key] || BEST_GUIDE_LABELS.en[key] || key;
}

function bestGuideNormalize(value) {
  return String(value ?? "")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function awardedPointValue(value) {
  const match = String(value ?? "")
    .replaceAll(",", "")
    .match(/([0-9]+(?:\.[0-9]+)?)(?:\s*\/\s*[0-9]+(?:\.[0-9]+)?)?/);
  return match ? Number(match[1]) : 0;
}

function pointRowForGuide(detail) {
  const points = detail.points || [];
  if (!points.length) return null;
  const active = state.activeSector || chooseInitialSector(detail);
  return points.find((row) => row.sector === active) || points.find((row) => row.sector === "General") || points[0];
}

function criteriaRowsForGuide(detail) {
  const rows = detail.criteria || [];
  if (!rows.length) return [];
  const active = state.activeSector || chooseInitialSector(detail);
  const activeRows = rows.filter((row) => row.sector === active);
  if (activeRows.length) return activeRows;
  const generalRows = rows.filter((row) => row.sector === "General");
  return generalRows.length ? generalRows : rows;
}

function findColumnByScoringName(detail, columnName) {
  const target = bestGuideNormalize(columnName);
  if (!target) return null;
  return (detail.columns || []).find((column) => {
    const candidates = [column.text, column.textKo, column.code].map(bestGuideNormalize).filter(Boolean);
    return candidates.some((candidate) => candidate === target || candidate.includes(target) || target.includes(candidate));
  });
}

function guideColumnLabel(detail, columnName) {
  const column = findColumnByScoringName(detail, columnName);
  if (!column) return guideTermLabel(columnName) || bestGuideText("anyOption");
  const label = state.lang === "ko" ? guideTermLabel(column.text || column.textKo || columnName) : textBy(column, "text", "textKo") || column.text || columnName;
  return `${column.code} · ${label}`;
}

function guideTermLabel(value) {
  const text = String(value || "");
  if (!text) return "";
  if (state.lang !== "ko") return text;
  const exact = exactFieldTranslation(text);
  if (exact) return exact;
  const local = {
    "Banking (Bank)": "은행(은행업)",
    "Investing (Asset manager)": "투자(자산운용사)",
    "Investing (Asset owner)": "투자(자산소유자)",
    "Insurance underwriting (Insurance company)": "보험 인수(보험사)",
    "% of portfolio covered in relation to total portfolio value": "전체 포트폴리오 가치 대비 포함 포트폴리오 비율(%)",
  }[text];
  return local || displayText(text);
}

function guideTermList(items) {
  return uniqueItems(items).map((item) => guideTermLabel(item)).join(", ");
}

function guideOptionLabel(detail, columnName, option) {
  if (!option) return bestGuideText("anyOption");
  const column = findColumnByScoringName(detail, columnName);
  const index = column?.options?.findIndex((item) => bestGuideNormalize(item) === bestGuideNormalize(option)) ?? -1;
  return optionText(option, index >= 0 ? column.optionsKo?.[index] : "");
}

function parseCriteriaSelections(detail, rows) {
  const rawSuggestions = [];
  const pushSuggestion = (row, columnName, options, pointText, type = "specific") => {
    const score = awardedPointValue(pointText);
    if (pointText && score <= 0) return;
    const normalizedOptions = options.filter(Boolean);
    rawSuggestions.push({
      level: row.level,
      columnName,
      columnLabel: type === "any" ? bestGuideText("anyOption") : guideColumnLabel(detail, columnName),
      options: type === "any" ? [bestGuideText("anyOption")] : normalizedOptions.map((option) => guideOptionLabel(detail, columnName, option)),
      pointText,
      score,
      type,
    });
  };

  for (const row of rows) {
    const text = String(row.criteria || "").replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
    const eitherRegex = /Either\s+'([^']+)'\s+or\s+'([^']+)'\s+selected in column\s+'([^']+)'\s*-\s*([0-9]+(?:\.[0-9]+)?(?:\s*\/\s*[0-9]+(?:\.[0-9]+)?)?)\s*points?/gi;
    const singleRegex = /'([^']+)'\s+selected in column\s+'([^']+)'\s*-\s*([0-9]+(?:\.[0-9]+)?(?:\s*\/\s*[0-9]+(?:\.[0-9]+)?)?)\s*points?/gi;
    const anyRegex = /Any option selected\s*-\s*([0-9]+(?:\.[0-9]+)?(?:\s*\/\s*[0-9]+(?:\.[0-9]+)?)?)\s*points?/gi;
    let match;
    while ((match = eitherRegex.exec(text))) {
      pushSuggestion(row, match[3], [match[1], match[2]], match[4]);
    }
    while ((match = singleRegex.exec(text))) {
      pushSuggestion(row, match[2], [match[1]], match[3]);
    }
    while ((match = anyRegex.exec(text))) {
      pushSuggestion(row, "", [], match[1], "any");
    }
  }

  const bestByLevelColumn = new Map();
  for (const suggestion of rawSuggestions) {
    const key = `${suggestion.level}|${bestGuideNormalize(suggestion.columnLabel)}`;
    const existing = bestByLevelColumn.get(key);
    if (!existing || suggestion.score > existing.score) {
      bestByLevelColumn.set(key, suggestion);
    }
  }

  const grouped = new Map();
  for (const suggestion of bestByLevelColumn.values()) {
    const optionLabel = suggestion.options.join(" / ");
    const key = `${suggestion.columnLabel}|${optionLabel}`;
    const existing = grouped.get(key) || { ...suggestion, levels: [], points: [] };
    existing.levels.push(suggestion.level);
    existing.points.push(suggestion.pointText);
    grouped.set(key, existing);
  }

  return [...grouped.values()].sort((a, b) => levelOrder(a.levels[0]) - levelOrder(b.levels[0]));
}

function positiveRouteSegments(criteriaText) {
  const normalized = String(criteriaText || "").replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
  const parts = normalized.split(/\n(?=ROUTE\s+[A-Z]\)|NON-DISCLOSURE ROUTE\)|NOT APPLICABLE ROUTE\))/i);
  return parts.filter((part) => {
    if (/NON-DISCLOSURE ROUTE|NOT APPLICABLE ROUTE/i.test(part)) return false;
    const maxMatch = part.match(/A maximum of\s+([0-9]+(?:\.[0-9]+)?)\s*\/\s*([0-9]+(?:\.[0-9]+)?)\s+points?/i);
    const inlineMatch = part.match(/-\s*([0-9]+(?:\.[0-9]+)?)(?:\s*\/\s*[0-9]+(?:\.[0-9]+)?)?\s+points?/i);
    const score = maxMatch ? Number(maxMatch[1]) : inlineMatch ? Number(inlineMatch[1]) : 0;
    return score > 0;
  });
}

function quotedListFromBlock(block) {
  return uniqueItems([...String(block || "").matchAll(/-\s*'([^']+)'/g)].map((match) => match[1]));
}

function bestGuideDisplayCondition(detail, columnName, option) {
  return `${guideColumnLabel(detail, columnName)} = ${guideOptionLabel(detail, columnName, option)}`;
}

function extractBestGuideChecklist(detail, rows, suggestions) {
  const isKo = state.lang === "ko";
  const selectedValues = [];
  const rowsColumns = [];
  const minimums = [];
  const exclusions = [];
  const dependencies = [];
  const sourceText = rows.map((row) => row.criteria || "").join("\n");
  const hasDirectSpecificSuggestion = suggestions.some((suggestion) => suggestion.type !== "any");

  for (const suggestion of suggestions) {
    selectedValues.push(suggestion.type === "any" ? uniqueItems(suggestion.options).join(" / ") : `${suggestion.columnLabel}: ${uniqueItems(suggestion.options).join(" / ")}`);
  }

  for (const row of rows) {
    for (const segment of positiveRouteSegments(row.criteria)) {
      const selectionRegex = /'([^']+)'\s+(?:selected\s+)?in column\s+'([^']+)'/gi;
      let selectionMatch;
      while ((selectionMatch = selectionRegex.exec(segment))) {
        const before = segment.slice(Math.max(0, selectionMatch.index - 25), selectionMatch.index);
        if (/excluding\s*$/i.test(before)) continue;
        if (!hasDirectSpecificSuggestion) selectedValues.push(bestGuideDisplayCondition(detail, selectionMatch[2], selectionMatch[1]));
      }

      const anyFollowingRegex = /in any of the following rows in question\s+([0-9.]+):?\s*([\s\S]*?)(?=\n(?:Points|Table|A maximum|OR|AND|ROUTE|$))/gi;
      const allFollowingRegex = /in all of the following rows in question\s+([0-9.]+):?\s*([\s\S]*?)(?=\n(?:Points|Table|A maximum|OR|AND|ROUTE|$))/gi;
      const singleRowRegex = /in row\s+'([^']+)'.{0,80}?question\s+([0-9.]+)/gi;
      let match;
      while ((match = anyFollowingRegex.exec(segment))) {
        const names = quotedListFromBlock(match[2]);
        dependencies.push(
          isKo
            ? `상위 문항 ${match[1]}에서 다음 행 중 하나 이상 조건 충족: ${guideTermList(names)}`
            : `In parent question ${match[1]}, meet the condition for at least one of these rows: ${names.join(", ")}`,
        );
        minimums.push(isKo ? `상위 문항 ${match[1]} 관련 행 최소 1개 이상` : `At least one relevant row in parent question ${match[1]}`);
      }
      while ((match = allFollowingRegex.exec(segment))) {
        const names = quotedListFromBlock(match[2]);
        dependencies.push(
          isKo
            ? `상위 문항 ${match[1]}에서 다음 모든 행 조건 확인: ${guideTermList(names)}`
            : `In parent question ${match[1]}, check all of these rows: ${names.join(", ")}`,
        );
        minimums.push(isKo ? `상위 문항 ${match[1]} 관련 행 전체` : `All relevant rows in parent question ${match[1]}`);
      }
      while ((match = singleRowRegex.exec(segment))) {
        dependencies.push(isKo ? `상위 문항 ${match[2]}의 '${guideTermLabel(match[1])}' 행 조건 확인` : `Check row '${match[1]}' in parent question ${match[2]}`);
      }

      for (const exclusion of segment.matchAll(/excluding column\s+'([^']+)'/gi)) {
        exclusions.push(isKo ? `열 제외 가능: ${guideColumnLabel(detail, exclusion[1])}` : `Column may be excluded: ${guideColumnLabel(detail, exclusion[1])}`);
      }
      for (const exclusion of segment.matchAll(/excluding row\s+'([^']+)'/gi)) {
        exclusions.push(isKo ? `행 제외 가능: ${guideTermLabel(exclusion[1])}` : `Row may be excluded: ${exclusion[1]}`);
      }

      for (const gt of segment.matchAll(/(?:Figure\s+)?greater than\s+([0-9]+(?:\.[0-9]+)?%?)\s+provided in column\s+'([^']+)'/gi)) {
        minimums.push(isKo ? `${guideColumnLabel(detail, gt[2])}: ${gt[1]} 초과` : `${guideColumnLabel(detail, gt[2])}: greater than ${gt[1]}`);
      }
      for (const atLeast of segment.matchAll(/at least\s+(one|[0-9]+)\s+([A-Za-z ]+)/gi)) {
        const count = atLeast[1].toLowerCase() === "one" ? "1" : atLeast[1];
        const subject = atLeast[2].trim();
        const subjectKo = /row for each environmental issue/i.test(subject) ? "각 환경 이슈별 행" : subject;
        minimums.push(isKo ? `최소 ${count}개 이상: ${subjectKo}` : `At least ${count}: ${subject}`);
      }

      if (/Table completed/i.test(segment)) {
        rowsColumns.push(isKo ? "표 전체 작성 완료" : "Complete the full table.");
      }
      if (/completed cell|number of cells displayed/i.test(segment)) {
        rowsColumns.push(isKo ? "표시된 모든 셀 작성" : "Complete every displayed cell.");
      }
      if (/completed in all rows/i.test(segment)) {
        rowsColumns.push(isKo ? "해당되는 모든 행에서 요구 열 작성" : "Complete the required column(s) in all applicable rows.");
      }
      if (/Partially completed rows will not receive full points/i.test(segment)) {
        rowsColumns.push(isKo ? "부분 작성 행은 최고점 불가: 행 단위로 끝까지 작성" : "Partially completed rows cannot receive full points; complete each row end to end.");
      }
    }
  }

  if ((detail.columns || []).length) {
    rowsColumns.push(isKo ? `현재 문항 응답 열 ${detail.columns.length}개 검토` : `Review ${detail.columns.length} response columns in this question.`);
  }
  if ((detail.rows || []).length) {
    rowsColumns.push(isKo ? `현재 문항 표시 행 ${detail.rows.length}개 확인` : `Check ${detail.rows.length} displayed rows in this question.`);
  }
  const requestedSource = requestedGuidanceText(detail);
  for (const atLeast of requestedSource.matchAll(/at least\s+(one|[0-9]+)\s+([A-Za-z ]+)/gi)) {
    const count = atLeast[1].toLowerCase() === "one" ? "1" : atLeast[1];
    const subject = atLeast[2].trim();
    const subjectKo = /row for each environmental issue/i.test(subject) ? "각 환경 이슈별 행" : subject;
    minimums.push(isKo ? `최소 ${count}개 이상: ${subjectKo}` : `At least ${count}: ${subject}`);
  }
  const narrativeColumns = narrativeColumnsForGuide(detail);
  if (narrativeColumns.some((column) => /financial figures|financial metric|explanation/i.test(`${column.text || ""} ${column.textKo || ""}`))) {
    rowsColumns.push(isKo ? "재무수치 설명 열 필수 작성" : "Complete the financial-figures explanation column.");
  }
  if (/Full Disclosure points must be awarded/i.test(sourceText)) dependencies.push(isKo ? "Awareness 점수 전 Disclosure 만점 필요" : "Full Disclosure points are required before Awareness scoring.");
  if (/Full Awareness points must be awarded/i.test(sourceText)) dependencies.push(isKo ? "Management 점수 전 Awareness 만점 필요" : "Full Awareness points are required before Management scoring.");
  if (/Full Management points must be awarded/i.test(sourceText)) dependencies.push(isKo ? "Leadership 점수 전 Management 만점 필요" : "Full Management points are required before Leadership scoring.");

  return {
    selectedValues: uniqueItems(selectedValues),
    rowsColumns: uniqueItems(rowsColumns),
    minimums: uniqueItems(minimums),
    exclusions: uniqueItems(exclusions),
    dependencies: uniqueItems(dependencies),
  };
}

function confidenceForBestGuide(rows, suggestions, checklist) {
  const source = rows.map((row) => row.criteria || "").join("\n");
  const hasParentQuestion = /question\s+[0-9]+\.[0-9]+|child question/i.test(source);
  const hasComplexLogic = /excluding|all of the following rows|any of the following rows/i.test(source);
  if (hasParentQuestion || (hasComplexLogic && checklist.dependencies.length)) {
    return { level: "review", label: bestGuideText("confidenceReview"), note: bestGuideText("confidenceReviewNote") };
  }
  if (suggestions.some((item) => item.type !== "any")) {
    return { level: "high", label: bestGuideText("confidenceHigh"), note: bestGuideText("confidenceHighNote") };
  }
  if (checklist.rowsColumns.length || checklist.minimums.length || suggestions.length) {
    return { level: "medium", label: bestGuideText("confidenceMedium"), note: bestGuideText("confidenceMediumNote") };
  }
  return { level: "review", label: bestGuideText("confidenceReview"), note: bestGuideText("confidenceReviewNote") };
}

function requestedGuidanceText(detail) {
  return (detail.guidance || [])
    .filter((block) => /Requested Content/i.test(block.type || ""))
    .map((block) => `${block.text || ""}\n${block.textKo || ""}`)
    .join("\n");
}

function uniqueItems(items) {
  return [...new Set(items.filter(Boolean).map((item) => String(item).trim()).filter(Boolean))];
}

function completionRulesForGuide(detail, rows) {
  const source = `${rows.map((row) => row.criteria || "").join("\n")}\n${requestedGuidanceText(detail)}`;
  const rules = [];
  const isKo = state.lang === "ko";
  if (/Full Disclosure points must be awarded/i.test(source)) {
    rules.push(isKo ? "Awareness 점수 대상이 되려면 Disclosure 조건을 먼저 모두 충족해야 합니다." : "Earn full Disclosure points first to be eligible for Awareness points.");
  }
  if (/Full Awareness points must be awarded/i.test(source)) {
    rules.push(isKo ? "Management 점수 대상이 되려면 Awareness 조건을 먼저 모두 충족해야 합니다." : "Earn full Awareness points first to be eligible for Management points.");
  }
  if (/Full Management points must be awarded/i.test(source)) {
    rules.push(isKo ? "Leadership 점수 대상이 되려면 Management 조건을 먼저 모두 충족해야 합니다." : "Earn full Management points first to be eligible for Leadership points.");
  }
  if (/completed cell|number of cells displayed/i.test(source)) {
    rules.push(isKo ? "표시되는 모든 셀을 빠짐없이 작성해야 셀 비례 배점에서 감점 위험이 줄어듭니다." : "Complete every displayed cell to avoid losing proportional cell-completion points.");
  }
  if (/completed row|Partially completed rows will not receive full points/i.test(source)) {
    rules.push(isKo ? "일부만 작성한 행은 최고점을 받기 어렵습니다. 표시된 행은 끝까지 완성하십시오." : "Partially completed rows may not receive full points. Complete each displayed row end to end.");
  }
  if (/at least one row/i.test(source)) {
    rules.push(isKo ? "평가방법론 또는 작성안내상 최소 1개 행 이상 작성이 요구됩니다." : "The scoring/guidance indicates that at least one row should be reported.");
  }
  if ((detail.columns || []).length) {
    rules.push(
      isKo
        ? `응답 열 ${detail.columns.length}개를 기준으로 조건부 표시 열까지 확인하고, 해당되는 열은 모두 작성하십시오.`
        : `Review all ${detail.columns.length} response columns, including conditionally displayed columns, and complete every applicable one.`,
    );
  }
  if ((detail.rows || []).length > 1) {
    rules.push(
      isKo
        ? `고정 행/환경 이슈 행이 있는 문항입니다. 표시되는 ${detail.rows.length}개 행 중 귀사에 해당되는 행을 누락하지 마십시오.`
        : `This question has fixed rows/environmental issue rows. Do not omit applicable rows from the ${detail.rows.length} displayed rows.`,
    );
  }
  if (/NON-DISCLOSURE ROUTE/i.test(source)) {
    rules.push(isKo ? "미응답 또는 미완료 선택지는 비공개 경로로 처리되어 큰 감점이 발생할 수 있습니다." : "Missing or incomplete responses may fall into a non-disclosure route and lose significant points.");
  }
  if (!rules.length) {
    rules.push(isKo ? "표시된 입력 항목을 모두 작성하고, 선택한 값의 근거를 공시 가이던스에 맞춰 설명하십시오." : "Complete all displayed inputs and explain the evidence for selected values in line with the reporting guidance.");
  }
  return uniqueItems(rules);
}

function narrativeColumnsForGuide(detail) {
  return (detail.columns || []).filter((column) => /RICH_TEXT|TEXT|COMMENT|EXPLAIN/i.test(column.type || ""));
}

function narrativeChecklistForGuide(detail, rows) {
  const isKo = state.lang === "ko";
  const narrativeColumns = narrativeColumnsForGuide(detail);
  const source = `${requestedGuidanceText(detail)}\n${rows.map((row) => row.criteria || "").join("\n")}`;
  const items = [];
  if (!narrativeColumns.length) return [bestGuideText("noNarrative")];
  const columnNames = narrativeColumns.map((column) => `${column.code} ${textBy(column, "text", "textKo") || column.text}`).join(", ");
  items.push(isKo ? `서술형 입력 열이 표시되는 경우(${columnNames}), 조직 고유의 사실, 범위, 기간, 근거를 구체적으로 작성하십시오.` : `When narrative column(s) are displayed (${columnNames}), provide organization-specific facts, scope, period, and evidence.`);
  if (/methodolog|calculation|approach/i.test(source)) items.push(isKo ? "산정 방법론, 사용 데이터, 계산 방식, 주요 가정을 함께 설명하십시오." : "Explain the methodology, data used, calculation approach, and key assumptions.");
  if (/financial|CAPEX|OPEX|revenue|assets|liabilities/i.test(source)) items.push(isKo ? "재무지표, 금액, 비율을 기재할 때 산정 기준과 포함/제외 범위를 같이 설명하십시오." : "For financial metrics, amounts, or percentages, explain the calculation basis and included/excluded scope.");
  if (/risk|opportunit/i.test(source)) items.push(isKo ? "리스크/기회의 영향, 발생 시점, 가치사슬 위치, 대응 조치를 연결해 설명하십시오." : "Connect risks/opportunities to impact, timing, value-chain location, and response actions.");
  if (/target|plan|progress|transition/i.test(source)) items.push(isKo ? "목표 또는 계획이 있다면 기준연도, 목표연도, 적용 범위, 현재 진행률을 포함하십시오." : "For targets or plans, include base year, target year, coverage, and current progress.");
  if (/time horizon|short-term|medium-term|long-term/i.test(source)) items.push(isKo ? "단기/중기/장기 기간 정의와 해당 기간을 사용한 이유를 설명하십시오." : "Define short-, medium-, and long-term horizons and explain why those horizons are used.");
  if (/value chain|upstream|downstream|portfolio/i.test(source)) items.push(isKo ? "직접 운영사업장, 업스트림/다운스트림 가치사슬, 포트폴리오 중 적용 범위를 명확히 구분하십시오." : "Clearly distinguish own operations, upstream/downstream value chain, and portfolio coverage.");
  items.push(
    isKo
      ? "영문 글자 수 제한은 원천 DB에 별도 수치가 없으면 CDP 포털 제출 화면에서 최종 확인하십시오."
      : "If the source DB does not state an English character limit, confirm the limit in the CDP portal before submission.",
  );
  return uniqueItems(items).slice(0, 8);
}

function narrativeTemplateForGuide(detail) {
  const isKo = state.lang === "ko";
  const source = `${detail.title || ""}\n${detail.titleKo || ""}\n${(detail.columns || []).map((column) => column.text || "").join("\n")}\n${requestedGuidanceText(detail)}`;
  const lower = source.toLowerCase();
  const hasFinancialRisk = /financial metric|vulnerable|capex|physical risk|transition risk/.test(lower);
  const hasScenario = /scenario analysis|time horizon/.test(lower);
  const hasFinancedEmissions = /financed emissions|portfolio|pcaf|asset classes/.test(lower);

  if (isKo && hasFinancialRisk) {
    return [
      "1. 적용한 재무지표와 해당 환경 이슈를 먼저 명시합니다.",
      "2. 전환 리스크와 물리적 리스크에 취약한 금액 및 비율을 구분해 설명합니다.",
      "3. 보고연도에 해당 리스크 대응을 위해 집행한 CAPEX가 있다면 산정 기준과 금액을 설명합니다.",
      "4. 사용 데이터, 계산 방식, 주요 가정, 제외 범위를 함께 기재합니다.",
    ];
  }
  if (isKo && hasScenario) {
    return [
      "1. 시나리오 분석 사용 여부와 분석 빈도를 명확히 기재합니다.",
      "2. 사용한 시나리오 유형, 시간범위, 주요 가정을 설명합니다.",
      "3. 분석 결과가 사업전략, 재무계획, 리스크 관리에 어떻게 반영됐는지 연결합니다.",
      "4. 향후 보완 계획이 있다면 담당 조직, 일정, 적용 범위를 함께 적습니다.",
    ];
  }
  if (isKo && hasFinancedEmissions) {
    return [
      "1. 산정 대상 자산군과 포트폴리오 포함 범위를 명확히 기재합니다.",
      "2. 금융배출량 산정 방법론, 활동자료, 배출계수, 데이터 품질을 설명합니다.",
      "3. 보고연도 값, 기준연도 값, 포트폴리오 커버리지 비율을 일관되게 제시합니다.",
      "4. 고객/투자대상 데이터 사용 여부와 주요 가정, 제외 범위를 설명합니다.",
    ];
  }
  if (!isKo) {
    if (hasFinancialRisk) {
      return [
        "1. State the financial metric and environmental issue assessed.",
        "2. Separate the amount and percentage vulnerable to transition and physical risks.",
        "3. Explain any CAPEX deployed in the reporting year toward the relevant risks.",
        "4. Describe data sources, calculation approach, key assumptions, and exclusions.",
      ];
    }
    if (hasScenario) {
      return [
        "1. State whether scenario analysis is used and how frequently it is performed.",
        "2. Describe scenario type, time horizons, and key assumptions.",
        "3. Explain how outputs inform business strategy, financial planning, and risk management.",
        "4. If not yet used, explain the plan, timeline, owner, and expected coverage.",
      ];
    }
    if (hasFinancedEmissions) {
      return [
        "1. State covered asset classes and portfolio coverage.",
        "2. Explain financed emissions methodology, activity data, emission factors, and data quality.",
        "3. Report current-year and base-year figures consistently with portfolio coverage.",
        "4. Explain client/investee data use, assumptions, and exclusions.",
      ];
    }
    return [
      "Our organization [has implemented/uses/assesses] [process or analysis] for [environmental issue] during [reporting year/period].",
      "The scope covers [own operations/value chain/portfolio], and the methodology is based on [methodology/data source].",
      "Key results are [quantitative result/amount/percentage], with key assumptions including [assumptions and limitations].",
      "We manage this through [governance/process/action plan], and next steps include [improvement plan and timeline].",
    ];
  }
  return [
    "당사는 [보고연도/기간] 기준으로 [환경 이슈]에 대한 [프로세스/분석/관리활동]을 수행했습니다.",
    "적용 범위는 [직접 운영사업장/가치사슬/포트폴리오]이며, [방법론/데이터 출처]를 기준으로 산정했습니다.",
    "주요 결과는 [정량값/금액/비율]이며, 주요 가정과 한계는 [가정 및 제외 범위]입니다.",
    "관련 리스크 또는 기회는 [거버넌스/관리 프로세스/이행계획]을 통해 관리하며, 향후 [개선계획 및 일정]을 추진할 예정입니다.",
  ];
}

function narrativeKeywordsForGuide(detail) {
  const isKo = state.lang === "ko";
  const source = `${detail.title || ""}\n${(detail.columns || []).map((column) => column.text || "").join("\n")}\n${requestedGuidanceText(detail)}`.toLowerCase();
  const candidates = [
    [/financial metric|revenue|assets|liabilities/i, ["재무지표", "Financial metric"]],
    [/transition risk/i, ["전환 리스크", "Transition risks"]],
    [/physical risk/i, ["물리적 리스크", "Physical risks"]],
    [/capex/i, ["CAPEX", "CAPEX"]],
    [/scenario analysis/i, ["시나리오 분석", "Scenario analysis"]],
    [/frequency/i, ["분석 빈도", "Frequency"]],
    [/strategic|financial planning|business strategy/i, ["전략/재무계획 연계", "Strategic/financial planning link"]],
    [/portfolio/i, ["포트폴리오", "Portfolio"]],
    [/financed emissions/i, ["금융배출량", "Financed emissions"]],
    [/methodolog|calculation/i, ["산정 방법론", "Methodology"]],
    [/data quality|pcaf/i, ["데이터 품질", "Data quality"]],
    [/assumption/i, ["주요 가정", "Key assumptions"]],
    [/coverage|scope/i, ["적용 범위", "Coverage"]],
    [/evidence|verification|validated/i, ["증빙/검증", "Evidence/verification"]],
  ];
  return uniqueItems(candidates.filter(([pattern]) => pattern.test(source)).map(([, labels]) => (isKo ? labels[0] : labels[1]))).slice(0, 12);
}

function exampleResponseForGuide(detail) {
  const isKo = state.lang === "ko";
  const source = `${detail.title || ""}\n${(detail.columns || []).map((column) => column.text || "").join("\n")}\n${requestedGuidanceText(detail)}`.toLowerCase();
  if (/financial metric|vulnerable|capex|physical risk|transition risk/.test(source)) {
    return isKo
      ? [
          "당사는 보고연도 기준 [재무지표] 중 [환경 이슈] 관련 전환 리스크에 취약한 금액을 [금액]으로, 물리적 리스크에 취약한 금액을 [금액]으로 산정했습니다.",
          "산정에는 [데이터 출처]와 [방법론]을 사용했으며, 주요 가정은 [가정]입니다. 보고연도 중 관련 리스크 대응 CAPEX는 [금액/없음]입니다.",
        ]
      : [
          "In the reporting year, we assessed [financial metric] vulnerable to transition risks related to [environmental issue] as [amount] and vulnerable to physical risks as [amount].",
          "The calculation used [data source] and [methodology], with key assumptions of [assumptions]. CAPEX deployed toward these risks was [amount/none].",
        ];
  }
  if (/scenario analysis|time horizon/.test(source)) {
    return isKo
      ? [
          "당사는 [분석 주기]로 [기후변화/수자원/산림] 관련 시나리오 분석을 수행하며, [시나리오명/출처]와 [시간범위]를 적용했습니다.",
          "분석 결과는 [사업전략/재무계획/리스크 관리]에 반영되며, 주요 가정과 한계는 [내용]입니다.",
        ]
      : [
          "We conduct scenario analysis for [environmental issue] [frequency], using [scenario/source] and [time horizons].",
          "The outputs inform [business strategy/financial planning/risk management], with key assumptions and limitations of [details].",
        ];
  }
  if (/financed emissions|portfolio|pcaf|asset classes/.test(source)) {
    return isKo
      ? [
          "당사는 [자산군]을 대상으로 보고연도 금융배출량을 [tCO2e]로 산정했으며, 전체 포트폴리오 가치 대비 커버리지는 [%]입니다.",
          "산정 방법론은 [PCAF/기타 방법론]이며, 데이터 품질 점수와 주요 가정은 [내용]입니다.",
        ]
      : [
          "We calculated financed emissions for [asset classes] as [tCO2e] in the reporting year, covering [%] of total portfolio value.",
          "The methodology used was [PCAF/other methodology], with data quality score and key assumptions of [details].",
        ];
  }
  return narrativeTemplateForGuide(detail);
}

function evidenceExamplesForGuide(detail) {
  const isKo = state.lang === "ko";
  const source = `${detail.title || ""}\n${(detail.columns || []).map((column) => column.text || "").join("\n")}\n${requestedGuidanceText(detail)}`.toLowerCase();
  const items = [];
  if (/scenario analysis/.test(source)) {
    items.push(isKo ? "시나리오 분석 보고서 또는 내부 검토자료" : "Scenario analysis report or internal review material");
    items.push(isKo ? "전략/재무계획 반영 내역" : "Evidence of integration into strategy/financial planning");
  }
  if (/financial metric|capex|revenue|assets|liabilities/.test(source)) {
    items.push(isKo ? "재무지표 산정 파일 및 회계/재무 데이터 출처" : "Financial metric calculation file and finance/accounting data source");
    items.push(isKo ? "CAPEX 집행 내역 또는 투자 승인 문서" : "CAPEX expenditure records or investment approval document");
  }
  if (/financed emissions|pcaf|portfolio/.test(source)) {
    items.push(isKo ? "금융배출량 산정 파일, PCAF 매핑표, 포트폴리오 데이터" : "Financed emissions workbook, PCAF mapping, and portfolio data");
    items.push(isKo ? "고객/투자대상 데이터 수집 근거 및 데이터 품질 산정 근거" : "Client/investee data evidence and data-quality basis");
  }
  items.push(isKo ? "담당 부서 검토 이력 및 제출 전 QA 체크리스트" : "Owner review record and pre-submission QA checklist");
  return uniqueItems(items).slice(0, 6);
}

function renderBestGuideCard(title, bodyHtml, className = "") {
  return `<article class="best-guide-card ${className}">
    <h4>${escapeHtml(title)}</h4>
    ${bodyHtml}
  </article>`;
}

function renderBestAnswerGuide(detail) {
  const rows = criteriaRowsForGuide(detail);
  const pointRow = pointRowForGuide(detail);
  if (!rows.length && !pointRow) return `<p class="text-block muted">${escapeHtml(bestGuideText("noCriteria"))}</p>`;

  const suggestions = parseCriteriaSelections(detail, rows);
  const checklist = extractBestGuideChecklist(detail, rows, suggestions);
  const confidence = confidenceForBestGuide(rows, suggestions, checklist);
  const completionRules = completionRulesForGuide(detail, rows);
  const narrativeChecklist = narrativeChecklistForGuide(detail, rows);
  const structureLines = narrativeTemplateForGuide(detail);
  const keywordItems = narrativeKeywordsForGuide(detail);
  const exampleLines = exampleResponseForGuide(detail);
  const evidenceItems = evidenceExamplesForGuide(detail);
  const hasNarrative = narrativeColumnsForGuide(detail).length > 0;
  const sectorLabelText = pointRow ? textBy(pointRow, "sector", "sectorKo") : textBy(rows[0], "sector", "sectorKo");

  const pointHtml = pointRow
    ? `<div class="best-score-strip">
        <span><b>${escapeHtml(t("sector"))}</b>${escapeHtml(sectorLabelText || "-")}</span>
        <span><b>D</b>${escapeHtml(pointRow.D || "-")}</span>
        <span><b>A</b>${escapeHtml(pointRow.A || "-")}</span>
        <span><b>M</b>${escapeHtml(pointRow.M || "-")}</span>
        <span><b>L</b>${escapeHtml(pointRow.L || "-")}</span>
      </div>`
    : `<p class="text-block muted">${escapeHtml(t("noPoints"))}</p>`;

  const suggestionHtml = suggestions.length
    ? `<div class="table-wrap best-guide-table">
        <table>
          <thead>
            <tr><th>${escapeHtml(bestGuideText("level"))}</th><th>${escapeHtml(bestGuideText("column"))}</th><th>${escapeHtml(bestGuideText("selection"))}</th><th>${escapeHtml(bestGuideText("points"))}</th></tr>
          </thead>
          <tbody>
            ${suggestions
              .map(
                (item) => `<tr>
                  <td><strong>${escapeHtml(uniqueItems(item.levels).join(", "))}</strong></td>
                  <td>${escapeHtml(item.columnLabel)}</td>
                  <td>${escapeHtml(uniqueItems(item.options).join(" / "))}</td>
                  <td>${escapeHtml(uniqueItems(item.points).join(", "))}</td>
                </tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </div>`
    : checklist.selectedValues.length
      ? `<div class="table-wrap best-guide-table">
        <table>
          <thead>
            <tr><th>${escapeHtml(bestGuideText("level"))}</th><th>${escapeHtml(bestGuideText("column"))}</th><th>${escapeHtml(bestGuideText("selection"))}</th><th>${escapeHtml(bestGuideText("points"))}</th></tr>
          </thead>
          <tbody>
            ${checklist.selectedValues
              .map(
                (item) => `<tr>
                  <td><strong>${escapeHtml(state.lang === "ko" ? "조건" : "Condition")}</strong></td>
                  <td>${escapeHtml(state.lang === "ko" ? "평가방법론 조건" : "Scoring condition")}</td>
                  <td>${escapeHtml(item)}</td>
                  <td>${escapeHtml(state.lang === "ko" ? "상위 경로 조건" : "Route condition")}</td>
                </tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </div>`
      : `<p class="text-block muted">${escapeHtml(bestGuideText("noSpecificOption"))}</p>`;

  const listHtml = (items) => {
    const values = items?.length ? items : [bestGuideText("noChecklistItems")];
    return `<ul class="best-guide-list">${values.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  };
  const keywordHtml = keywordItems.length
    ? `<div class="keyword-list">${keywordItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`
    : `<p class="text-block muted">${escapeHtml(bestGuideText("noChecklistItems"))}</p>`;
  const confidenceHtml = `<div class="confidence-box ${escapeHtml(confidence.level)}">
    <strong>${escapeHtml(confidence.label)}</strong>
    <p>${escapeHtml(confidence.note)}</p>
  </div>`;
  const checklistPanel = (title, items, className = "") => `<div class="checklist-panel ${className}">
    <h5>${escapeHtml(title)}</h5>
    ${listHtml(items)}
  </div>`;
  const checklistHtml = `<div class="best-checklist-grid">
    ${checklistPanel(bestGuideText("mustSelect"), checklist.selectedValues)}
    ${checklistPanel(bestGuideText("rowsColumns"), checklist.rowsColumns)}
    ${checklistPanel(bestGuideText("minimums"), checklist.minimums)}
    ${checklistPanel(bestGuideText("exclusions"), checklist.exclusions)}
    ${checklistPanel(bestGuideText("dependencies"), checklist.dependencies, "wide")}
  </div>`;
  const templateHtml = hasNarrative
    ? `<div class="answer-box">
        <div>
          <h5>${escapeHtml(bestGuideText("writingStructure"))}</h5>
          ${listHtml(structureLines)}
        </div>
        <div>
          <h5>${escapeHtml(bestGuideText("requiredKeywords"))}</h5>
          ${keywordHtml}
        </div>
        <div>
          <h5>${escapeHtml(bestGuideText("exampleResponse"))}</h5>
          <div class="best-template">${exampleLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}</div>
        </div>
        <div>
          <h5>${escapeHtml(bestGuideText("evidenceExamples"))}</h5>
          ${listHtml(evidenceItems)}
        </div>
      </div>`
    : `<p class="text-block muted">${escapeHtml(bestGuideText("noNarrative"))}</p>`;
  const caution =
    state.lang === "ko"
      ? "최고점에 유리한 선택지라도 실제 수행 사실, 내부 문서, 산정 파일, 검증 자료가 없으면 선택하지 마십시오. CDP 평가는 선택값과 설명의 일관성, 증빙 가능성을 함께 봅니다."
      : "Do not select a high-scoring option unless it is true and supported by internal documents, calculation files, or verification evidence. CDP scoring depends on consistency between selections, explanations, and evidence.";

  return `<div class="best-guide">
    <div class="best-guide-notice">
      <strong>${escapeHtml(bestGuideText("noticeTitle"))}</strong>
      <p>${escapeHtml(bestGuideText("notice"))}</p>
    </div>
    <div class="best-guide-grid">
      ${renderBestGuideCard(bestGuideText("confidence"), confidenceHtml, `wide confidence-card ${confidence.level}`)}
      ${renderBestGuideCard(bestGuideText("pointSummary"), pointHtml, "wide")}
      ${renderBestGuideCard(bestGuideText("recommendedOptions"), suggestionHtml, "wide")}
      ${renderBestGuideCard(state.lang === "ko" ? "최고점 체크리스트" : "Best-score checklist", checklistHtml, "wide checklist-card")}
      ${renderBestGuideCard(bestGuideText("completionRules"), listHtml(completionRules))}
      ${renderBestGuideCard(bestGuideText("narrativeChecklist"), listHtml(narrativeChecklist))}
      ${renderBestGuideCard(bestGuideText("template"), templateHtml, "wide")}
      ${renderBestGuideCard(bestGuideText("evidence"), `<p class="text-block">${escapeHtml(caution)}</p>`, "wide caution")}
    </div>
  </div>`;
}

function renderGuidance(detail) {
  if (!detail.guidance?.length) return `<p class="text-block muted">${t("noGuidance")}</p>`;
  return detail.guidance
    .map(
      (block) => `<article class="guidance-block">
        <h4>${escapeHtml(guidanceTypeText(block))}</h4>
        <div class="text-block">${richText(guidanceBodyText(block), { preserveKo: state.lang === "ko" })}</div>
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
