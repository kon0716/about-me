# 開発計画書

## 開発フェーズ

### フェーズ 1: プロジェクト設定とベース環境構築 ✅

- [x] プロジェクト要件の整理
- [x] サイト設計の策定
- [x] 開発環境の確認（React + TypeScript + Vite）

### フェーズ 2: 共通コンポーネントの開発

- [ ] レイアウトコンポーネント（Header, Footer, Navigation）
- [ ] 基本的な UI コンポーネント
- [ ] ルーティングの設定

### フェーズ 3: 各ページの実装

- [ ] TOP ページの実装
- [ ] 自己紹介ページの実装
- [ ] お問い合わせページの実装
- [ ] 作品・スキルページの実装
- [ ] 趣味・興味ページの実装

### フェーズ 4: JavaScript 機能の実装

- [ ] アニメーション効果
- [ ] フォームバリデーション
- [ ] インタラクティブ要素

### フェーズ 5: レスポンシブ対応とスタイリング

- [ ] CSS 設計とスタイリング
- [ ] レスポンシブデザインの実装
- [ ] クロスブラウザ対応

### フェーズ 6: 最終調整とテスト

- [ ] コードレビューと最適化
- [ ] エラーチェック
- [ ] パフォーマンス最適化
- [ ] README.md の作成

## 必要なライブラリ・ツール

### 追加インストール予定

```bash
# ルーティング
npm install react-router-dom

# アニメーション
npm install framer-motion

# フォーム管理
npm install react-hook-form

# アイコン
npm install react-icons

# ユーティリティ
npm install clsx
```

### 使用技術スタック

- **フロントエンド**: React 19 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: CSS Modules / Vanilla CSS
- **リンター**: ESLint
- **パッケージマネージャー**: npm

## ファイル命名規則

### ディレクトリ

- PascalCase: `Components/`, `Pages/`
- kebab-case: `src/`, `public/`

### ファイル

- コンポーネント: `ComponentName.tsx`
- スタイル: `ComponentName.module.css`
- ユーティリティ: `utilityName.ts`
- 型定義: `types.ts`

### CSS Class

- BEM 記法: `.block__element--modifier`
- CSS Modules: `.className`

## Git 管理

### ブランチ戦略

- `main`: 本番用
- `develop`: 開発用
- `feature/*`: 機能開発用

### コミットメッセージ

```
feat: 新機能追加
fix: バグ修正
docs: ドキュメント変更
style: スタイリング変更
refactor: リファクタリング
test: テスト追加・修正
```

## 品質管理

### チェックリスト

- [ ] ESLint エラーなし
- [ ] TypeScript エラーなし
- [ ] レスポンシブ動作確認
- [ ] 全ページの動作確認
- [ ] フォームバリデーション確認
- [ ] 画像・リンクの確認

### テスト環境

- Chrome（最新）
- Firefox（最新）
- Safari（最新）
- モバイル（iOS Safari, Android Chrome）
