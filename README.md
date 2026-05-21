# 2026 CDP Climate Change Question DB

이 폴더는 2026 CDP Climate Change 문항을 DB처럼 검색하고 확인하는 로컬 웹페이지입니다.

## 실행 방법

GitHub Pages에 배포하면 저장소의 Pages URL로 바로 열 수 있습니다.

로컬에서 확인할 때는 현재 서버가 켜져 있으면 아래 주소로 열면 됩니다.

```text
http://127.0.0.1:8787/
```

서버를 다시 켜야 할 때는 PowerShell에서 아래 명령을 실행합니다.

```powershell
cd "B:\CODEX\CDP Questionaire\cdp_question_db_app"
python -m http.server 8787 --bind 127.0.0.1
```

## 확인 가능한 항목

- 문항 코드와 문항명
- 국문 / English 전환 버튼
- 정성 PPT / 정량 Excel 구분
- 응답 방법
- 드롭다운 및 응답 선택지
- 응답 테이블 컬럼과 행
- D/A/M/L 평가 배점
- 평가 기준
- 2025 대비 2026 변경 여부와 변경 메모
- 관련 공시 가이던스
- 필터 조건이 포함된 공유 링크
- 필터 결과 CSV 다운로드
- 자주 보는 문항 즐겨찾기
- 브라우저 콘솔 기반 구조화 QA 로그

## 국문 데이터 보강

국문 문항명은 기존 2025 국문 PPT/Excel에서 우선 가져오고, 없는 항목은 CDP 용어 사전을 적용한 작업용 국문 번역을 추가했습니다.

```powershell
cd "B:\CODEX\CDP Questionaire"
python add_cdp_question_db_i18n.py
```

## 데이터 출처

- `B:\CODEX\CDP Questionaire\cdp_2026_knowledge.db`
- `B:\CODEX\CDP Questionaire\cdp_public_guidance_raw.json`
- `B:\CODEX\CDP Questionaire\OUTPUT\2026_CDP_CC_forms_20260520_1631\2026_CDP_CC_Change_Summary_KOR_v2.xlsx`

원본 INPUT 파일은 수정하지 않았습니다.

## 공개 배포 범위

이 공개용 폴더에는 웹페이지 실행에 필요한 정적 파일만 포함했습니다.

- 포함: `index.html`, `app.js`, `styles.css`, `data/`
- 제외: 원본 `INPUT` PPT/Excel, 작업용 `OUTPUT`, 백업 파일, QA 스크린샷
