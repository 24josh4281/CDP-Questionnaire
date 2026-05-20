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
  return state.lang === "ko" ? item[koKey] || item[enKey] || "" : item[enKey] || item[koKey] || "";
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
        <span>${nl(value || "-")}</span>
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
        <h4>${escapeHtml(group.title)}</h4>
        <ul>
          ${options
            .map((option) => `<li><span>${escapeHtml(option)}</span></li>`)
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
              <p class="text-block">${nl(textBy(row, "criteria", "criteriaKo"))}</p>
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
        <p class="text-block">${nl(textBy(block, "text", "textKo"))}</p>
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
