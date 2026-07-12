# MCR-v1 Repository Audit

日付: 2026-07-13
対象: https://github.com/dawg2004/MCR-v1 (main / d34c861)

## 1. 現状サマリー

本リポジトリは、ビルドシステムを持たない静的HTML 4ファイルで構成されている。
マスタープロンプト(MCR v1.0)が想定する Next.js + TypeScript + Supabase 構成は現時点で存在しない。
したがって作業の実態は「リファクタリング」ではなく「既存資産を移植しながらのプラットフォーム化」になる。
ただし既存4ページには再利用価値の高い資産(デザイントークン、生成エンジン、思想)が揃っている。

## 2. ファイル別インベントリ

| ファイル | 行数 | 役割 | 主要技術 |
|---|---|---|---|
| index.html | 1041 | Occult Engine。生年月日から数秘/占星/ルーン/ジオマンシー/ケルト樹木/干支/Destiny Matrix 等を導出しリーディングを生成。ハーモノグラフ描画あり | Vanilla JS, Canvas |
| about.html | 353 | 70システムのカタログページ | Vanilla JS, Canvas(装飾) |
| fractal.html | 974 | Fractal Identity。生年月日を複素数化して一意のフラクタルを生成。PNG/SVG/ポスター出力、共有リンク | Canvas, 自前Renderer |
| flow.html | 826 | Surface Flow。生年月日をパラメトリック曲面へ変換、曲面上ノードの軌跡を描画。動画エクスポート、背景画像合成 | Canvas, MediaRecorder |

共通点:

- 外部CDN依存ゼロ。完全自己完結の単一ファイル構成(Safari互換方針と一致)
- CSSカスタムプロパティによる統一デザイントークン(--void #080a16, --violet #8b6fe8, --cyan #4fd0e0, --gold #e8c36f 等)
- 日本語UI、明朝+ゴシックのフォントスタック
- 共有ハンバーガーメニューでページ間ナビゲーション済み

## 3. 技術スタック(現状)

- HTML5 / CSS3 / Vanilla JavaScript(ES5〜ES6混在)
- Canvas 2D API
- ビルドツール、パッケージマネージャ、テスト、CI: なし
- GitHub Actions / Issue Templates / PR Template: なし
- ブランチ: main のみ

## 4. マスタープロンプトとのギャップ

| 要求 | 現状 | ギャップ |
|---|---|---|
| Next.js + React + TypeScript | 静的HTML | フル導入が必要 |
| Supabase / PostgreSQL | なし | 新規 |
| Notion API 同期 | なし | 新規 |
| Universe(グラフ可視化) | なし | 新規(React Flow / Three.js) |
| SRI エンジン | なし | 新規 |
| Profile / Search / Ranking | なし | 新規 |
| デザインシステム | HTML内に事実上存在 | トークン抽出とTailwind化 |
| 生年月日→シンボル導出ロジック | index.html に多数実装済み | TSモジュールへ移植可能 |
| ジェネラティブアート | fractal / flow に高品質実装済み | コンポーネント化して移植可能 |

## 5. 使い回せる資産(優先移植)

1. 導出エンジン群(index.html): digitSum, dayGanzhi, castHexagram, castGeomancy, celticTree, destinyMatrix など。純関数に近く、`src/lib/engines/` へのTS移植が容易。SRIの入力素材(Horoscope側)としてそのまま使える
2. Fractal Renderer(fractal.html): deriveParams(生年月日→複素パラメータ)と描画部。プロフィールページの「その人固有のビジュアル」として No Avatar 方針(ADR-005)と完全に噛み合う
3. Surface Flow エンジン(flow.html): Universe の背景演出、またはプロフィールのモーション要素へ転用可能
4. デザイントークン: 現行の色体系はマスタープロンプト指定(#050816 / #4F7BFF / #8C5CFF / #3DE5E8 / #D7B25A)と近縁。統合トークン表を DESIGN_SYSTEM.md で定義して一本化する
5. 思想と文言: 「占いではなく数式から生まれるアート」という既存ページの立ち位置は、MCRの「占いサイトではない」方針の原文として活きる

## 6. 作り直した方が良い部分

- ページ骨格: 単一HTML内のDOM操作はNext.jsのApp Router + Atomic Designへ全面置換
- 状態管理: グローバル変数ベース → React state / server components
- スタイル: インラインstyleブロック → TailwindCSS + トークン
- 共有メニュー: 4ファイルに重複実装 → 共通Layoutコンポーネント

## 7. リスクと注意点

- SRIは象徴的スコアリングであり、科学的相性指標として提示しない旨をUI文言とドキュメント両方に明記する(PRD / SRI_ENGINE.md)
- 実在人物名を扱うため、公開範囲、同意、削除依頼フローをSECURITY.mdで先に定義する
- Canvasエンジンの移植時は挙動一致テスト(同一生年月日→同一出力)をTESTING.mdの受け入れ基準にする

## 8. 推奨リポジトリ戦略(ADR-001の素案)

案A: main 直下に Next.js を新設し、既存4HTMLは `legacy/` へ移動して参照資産として保存(推奨)
案B: `platform/` サブディレクトリにNext.jsを併設し、静的ページと共存
案A推奨理由: 「既存Repositoryを育てる」要件を満たしつつ、履歴とエンジン資産を保全し、デプロイ(Vercel)を単純化できる。

## 9. 優先順位

1. ADR-001確定とディレクトリ再編(legacy退避)
2. Next.js + TS + Tailwind 基盤、デザイントークン移植
3. エンジン移植(engines/ 純関数化 + スナップショットテスト)
4. Supabaseスキーマ(People / SoulCode / Horoscope / Relationship / Ranking / History / Users)
5. Home / Search / Profile(Fractal Identity統合)
6. Universe(React Flow、粒子は段階導入)
7. Ranking / Soul Radar
8. Admin(Notion同期 / CSV / 再計算)
9. ドキュメント一式とCI
