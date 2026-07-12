# ADR-001: Repository Strategy

Status: Accepted (2026-07-13)

## Context
既存リポジトリ MCR-v1 は静的HTML 4ファイル(Occult Engine / About / Fractal Identity / Surface Flow)で構成され、Next.jsプロジェクトは存在しなかった(docs/PROJECT_AUDIT.md 参照)。マスタープロンプトは「新規プロジェクトを作らず、既存リポジトリを育てる」ことを要求している。

## Decision
案Aを採用する。main直下にNext.js (App Router, TypeScript strict, TailwindCSS) を新設し、既存4HTMLは legacy/ へ移動して参照資産として保存する。

## Consequences
- Git履歴と既存エンジン資産(fractal, flow, 導出関数群)を保全したままプラットフォーム化できる
- Vercelデプロイはルートのnext.config.tsで単純化される
- legacy/ のエンジンは src/lib/engines/ へ順次TypeScript移植し、同一入力→同一出力のスナップショットテストで挙動一致を保証する(TESTING.md)
- legacy/ は移植完了後もリファレンスとして残す

## Alternatives Considered
- 案B: platform/ サブディレクトリ併設。デプロイ設定が複雑化するため却下
- 案C: エンジンのみ先行TS化。基盤なしではテストとCIが組めないため却下
