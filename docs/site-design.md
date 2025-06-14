# サイト設計書

## サイト構造

```
/Users/ktc/25A31E0011/about-me/
├── public/
│   ├── images/           # 画像ファイル
│   └── icons/           # アイコンファイル
├── src/
│   ├── components/      # Reactコンポーネント
│   │   ├── Layout/      # レイアウト関連
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx        # UIコンポーネント
│   │   │   │   ├── Header.css        # スタイル
│   │   │   │   ├── Header.test.tsx   # テスト
│   │   │   │   ├── useHeader.ts      # ロジックフック
│   │   │   │   └── index.ts          # エクスポート
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Footer.css
│   │   │   │   ├── Footer.test.tsx
│   │   │   │   └── index.ts
│   │   │   └── Navigation/
│   │   │       ├── Navigation.tsx
│   │   │       ├── Navigation.css
│   │   │       ├── Navigation.test.tsx
│   │   │       ├── useNavigation.ts  # ナビゲーションロジック
│   │   │       └── index.ts
│   │   ├── Forms/       # フォーム関連
│   │   │   └── ContactForm/
│   │   │       ├── ContactForm.tsx
│   │   │       ├── ContactForm.css
│   │   │       ├── ContactForm.test.tsx
│   │   │       ├── useContactForm.ts # フォームロジック
│   │   │       ├── validation.ts     # バリデーション
│   │   │       └── index.ts
│   │   └── UI/          # UI部品
│   │       ├── Button/
│   │       │   ├── Button.tsx
│   │       │   ├── Button.css
│   │       │   ├── Button.test.tsx
│   │       │   └── index.ts
│   │       └── Modal/
│   │           ├── Modal.tsx
│   │           ├── Modal.css
│   │           ├── Modal.test.tsx
│   │           ├── useModal.ts       # モーダル制御ロジック
│   │           └── index.ts
│   ├── pages/           # ページコンポーネント
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.css
│   │   │   ├── Home.test.tsx
│   │   │   ├── useHome.ts           # ページロジック
│   │   │   └── index.ts
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   ├── About.css
│   │   │   ├── About.test.tsx
│   │   │   └── index.ts
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   ├── Contact.css
│   │   │   ├── Contact.test.tsx
│   │   │   └── index.ts
│   │   ├── Portfolio/
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Portfolio.css
│   │   │   ├── Portfolio.test.tsx
│   │   │   ├── usePortfolio.ts      # ポートフォリオロジック
│   │   │   └── index.ts
│   │   └── Hobbies/
│   │       ├── Hobbies.tsx
│   │       ├── Hobbies.css
│   │       ├── Hobbies.test.tsx
│   │       ├── useHobbies.ts        # 趣味ページロジック
│   │       └── index.ts
│   ├── hooks/           # カスタムフック
│   │   ├── useApi.ts    # API呼び出し
│   │   ├── useLocalStorage.ts
│   │   └── useResponsive.ts
│   ├── styles/          # グローバルスタイル
│   │   ├── globals.css  # グローバルCSS
│   │   ├── variables.css # CSS変数
│   │   └── reset.css    # リセットCSS
│   ├── types/           # TypeScript型定義
│   │   ├── form.ts
│   │   └── portfolio.ts
│   └── utils/           # ユーティリティ
│       ├── constants.ts
│       └── helpers.ts
└── docs/                # ドキュメント
```

## ページ設計

### 1. TOP ページ (`/`)

**目的**: 訪問者の第一印象を決定する重要なページ
**コンテンツ**:

- ヒーローセクション（自己紹介と写真）
- スキルハイライト
- 最新の作品紹介
- CTA ボタン（詳細ページへの誘導）

**JavaScript 機能**:

- スムーススクロール
- フェードインアニメーション
- タイピングエフェクト

### 2. 自己紹介ページ (`/about`)

**目的**: 詳細な自己紹介と経歴の紹介
**コンテンツ**:

- 詳細なプロフィール
- 学歴・経歴
- 価値観・目標
- 趣味・特技

**JavaScript 機能**:

- プログレスバー（スキルレベル表示）
- タイムライン表示

### 3. お問い合わせページ (`/contact`)

**目的**: 連絡手段の提供
**コンテンツ**:

- コンタクトフォーム
- SNS リンク
- メールアドレス

**JavaScript 機能**:

- フォームバリデーション
- 送信確認（モーダル）

### 4. 作品・スキルページ (`/portfolio`)

**目的**: 技術力と制作物のアピール
**コンテンツ**:

- 技術スキル一覧
- プロジェクト紹介
- 使用技術の詳細

**JavaScript 機能**:

- フィルタリング機能
- モーダル表示

### 5. 趣味・興味ページ (`/hobbies`)

**目的**: 人間性や多面性のアピール
**コンテンツ**:

- 趣味の紹介
- 興味のある分野
- 写真・動画

**JavaScript 機能**:

- 画像ギャラリー
- スライダー

## 共通コンポーネント

### ヘッダー

- ロゴ/サイト名
- ナビゲーションメニュー
- ハンバーガーメニュー（モバイル）

### フッター

- 著作権表示
- SNS リンク
- サイトマップ

### ナビゲーション

- 現在ページのハイライト
- スムーズなページ遷移

## レスポンシブデザイン

### ブレークポイント

- モバイル: `< 768px`
- タブレット: `768px - 1024px`
- デスクトップ: `> 1024px`

### レイアウト戦略

- モバイルファーストアプローチ
- Flexbox/CSS Grid の活用
- 適切な余白とタイポグラフィ

## カラーパレット

- プライマリ: `#646cff` (青系)
- セカンダリ: `#61dafb` (シアン系)
- ダーク: `#242424`
- ライト: `#ffffff`
- テキスト: `rgba(255, 255, 255, 0.87)`

## フォント

- メイン: `system-ui, Avenir, Helvetica, Arial, sans-serif`
- コード: `'Courier New', monospace`

## スタイルファイル配置戦略

### コンポーネント単位での CSS 管理

各コンポーネントと対応する CSS ファイルを同じディレクトリに配置することで、以下のメリットを実現：

1. **保守性の向上**: コンポーネントとスタイルが近い場所にあるため、修正時の作業効率が向上
2. **可読性の向上**: ファイル構造が直感的で、新規メンバーでも理解しやすい
3. **モジュール性**: 各コンポーネントが独立したスタイルを持つため、他への影響を最小限に抑制

### スタイルファイルの種類

- **コンポーネント専用 CSS**: `ComponentName.css`

  - 該当コンポーネントのみで使用するスタイル
  - コンポーネント固有のレイアウト、色、サイズなど

- **グローバル CSS**: `src/styles/`
  - `globals.css`: サイト全体に適用される基本スタイル
  - `variables.css`: CSS 変数（カラーパレット、フォントサイズなど）
  - `reset.css`: ブラウザ間の差異を統一するリセット CSS

### 命名規則

- CSS クラス名: BEM 記法を採用
  - Block: `.header`
  - Element: `.header__nav`
  - Modifier: `.header__nav--mobile`

## コンポーネントアーキテクチャ

### ディレクトリ構造の設計思想

各コンポーネントは独立したディレクトリを持ち、以下のファイル構成を採用：

1. **UI コンポーネント** (`ComponentName.tsx`)

   - プレゼンテーション層のみを担当
   - プロパティを受け取り、UI を描画
   - ビジネスロジックを含まない

2. **ロジックフック** (`useComponentName.ts`)

   - ビジネスロジック、状態管理を担当
   - API 呼び出し、データ変換等の処理
   - UI から完全に分離

3. **スタイル** (`ComponentName.css`)

   - コンポーネント固有のスタイリング
   - BEM 記法を使用した命名

4. **テスト** (`ComponentName.test.tsx`)

   - ユニットテスト、統合テスト
   - UI とロジックを個別にテスト可能

5. **インデックス** (`index.ts`)
   - エクスポート管理
   - 外部から使用する際のエントリーポイント

### UI とロジックの疎結合設計

#### 1. カスタムフックによるロジック分離

```typescript
// useContactForm.ts - ロジック層
export const useContactForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (data) => {
    // バリデーションロジック
  };

  const handleSubmit = async (data) => {
    // 送信処理ロジック
  };

  return {
    formData,
    errors,
    isSubmitting,
    validateForm,
    handleSubmit,
    setFormData,
  };
};

// ContactForm.tsx - UI層
export const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    validateForm,
    handleSubmit,
    setFormData,
  } = useContactForm();

  return <form onSubmit={handleSubmit}>{/* UIのみに集中 */}</form>;
};
```

#### 2. TypeScript 型定義による契約

- `src/types/`ディレクトリで型定義を管理
- UI とロジック間のデータ構造を明確化
- インターフェースによる疎結合を実現

#### 3. テスタビリティの向上

- UI コンポーネントはプロパティのみでテスト
- ロジックフックは独立してテスト
- モックやスタブの使用が容易

### コンポーネント設計原則

1. **単一責任の原則**: 各コンポーネントは一つの責任のみを持つ
2. **再利用性**: 汎用的な UI コンポーネントは`src/components/UI/`に配置
3. **可読性**: ファイル名とディレクトリ構造で役割を明確化
4. **保守性**: 関連ファイルを同一ディレクトリにまとめて管理
