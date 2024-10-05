# 麻雀点数アプリ

## How to Run

ローカルでの実行環境

```sh
# npmのインストール
npm install
```

環境の立ち上げ

```sh
# DBの立ち上げ
docker-compose up -d
```

環境変数を用意
`.env.example`から`env`を作成

初回やDB変更がある場合はマイグレーションを走らせる。

```sh
npx prisma migrate dev
npx prisma generate
npx prisma db push
```

開発環境の立ち上げ

```sh
# npmの起動
npm run dev
```

[http://localhost:5173]()で起動

## Using Storybook

Component管理にstorybookを利用

### Running Storybook

以下で起動

```sh
npm run storybook
```

[http://localhost:6006]()で起動

## Using PrismaStudio

DB管理にprismaStudioを利用

### Running PrismaStudio

以下で起動

```sh
npx prisma studio
```

[http://localhost:5555]()で起動

## Technology Selection

- [sveltekit](https://kit.svelte.dev/)
- [kysely](https://kysely.dev/): DBアクセスに利用
- [Prisma](https://www.prisma.io/): スキーマ管理に利用
- [Storybook](https://storybook.js.org/): コンポーネント管理に利用
- [tailwind](https://tailwindcss.com/): CSSフレームワーク
- [Flowbit](https://flowbite-svelte.com/): CSSコンポーネントライブラリ
- [tabler](https://tabler.io/): Iconライブラリ
- [dayjs](https://day.js.org/): 日時処理
- [sveltekit-i18n](https://github.com/sveltekit-i18n/lib): 多言語対応の予定
<!-- - [superform](https://superforms.rocks/): フォーム管理。バリデーションは[zod](https://zod.dev/)を利用。 -->

## Directory Structure

本プロジェクトのディレクトリ構造は以下の通り

```sh
.
├── src/
│   ├── lib/
│   │   ├── components/ # 再利用可能なコンポーネントを配置
│   │   │   ├── features/ # 特定の機能に関連するコンポーネントを配置
│   │   │   └── ...
│   │   ├── models/ # DBにアクセスに関連するモジュールを配置
│   │   │   ├── **/
│   │   │   ├── db.js # DBの設定やコネクション
│   │   │   └── types.ts # DBの型定義 ※自動生成
│   │   ├── schema/ # zodのschema置き場
│   │   ├── transforms/ # 多言語対応ファイルの置き場
│   │   ├── utils/ # ユーティリティ関数を配置
│   │   └── ...
│   ├── routes/ # sveltekitのルートコンポーネントを配置
│   │   ├── +page.svelte/ # アプリのフロント
│   │   ├── +page.server.ts/ # アプリのバック
│   │   └── ...
│   └── ...
├── .storybook/
│   ├── main.js # storybookのメイン設定ファイル
│   └── preview.js # storybookのプレビュー設定ファイル
├── prisma/
├── package.json
├── svelte.config.js # sveltekitの設定ファイル
└── ...

```

## Future Issues

- 点数が同一のときの処理

  - `dev-branch`でDBのスキーマを変更
  - `selectedScoreId`で情報は取得できているので、`user.name`や`user.icon`を取得してUIを作成
  - `RoomUser`Tableから、`userOrder`を取得してその順番をDBで変更すればおそらく実装できる。

- 設定変更が各スコアやチップカードに反映されていない

  - `room-update`で`score`や`chip`が更新されるような実装の追加

- 計算ボタンが押せないように制御
  - `selectedScoreId`から、`scoreOrder`を取得
  - 同じ`scoreOrder`内での`input`を比較して`initialPoint * 4`と一致していない場合は、`Button`の`disabled`属性で制御
- アノテーションの実装
  - `Toast.svelte`の作成とバリエーションの追加
  - `zod`によるスキーマ管理と`superforms`によるフォームの管理
  - Count関係を`store`を使わずに実装
  - PointBordの`flowbite-svelte`を使ったコンポーネントの廃止
  - 各ユーティリティ関数のリファクタリング
