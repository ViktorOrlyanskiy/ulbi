## Запуск проекта

```
npm install - устанавливает зависимости
npm run start - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта dev server + backend
- `npm run start:dev:front` - Запуск frontend проекта dev server
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:up` - Обновление скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - Запуск прекоммит хуков

----

## Архитектура проекта

Проект написан в соответствии с методологией `Feature sliced design`

Ссылка на документацию - [https://feature-sliced.design/](https://feature-sliced.design/docs/get-started/tutorial)

----

## Интернационализация

В проекте используется библиотека `i18next` для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Ссылка на документацию - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) `Jest` для обычных unit тестов - `npm run test:unit`
2) `RTL` для тестов на компоненты  - `npm run test:unit`
3) `Loki` для скриншотных тестов - `npm run test:ui`
4) `Cypress` для e2e тестирования - `npm run test:e2e`

[Подробнее о тестах](/docs/tests.md)

----

## Линтинг

В проекте используется:
1) `Eslint` для проверки typescript кода + плагин `i18next` для проверки наличия переводов
2) `Stylelint` для проверки файлов со стилями + плагин `stylelint-order` для автоматического исправления порядка следования css свойств
3) `Prettier` для приведения кода к единому стилю

----
## Storybook

В проекте для каждого компонента написаны стори-кейсы. (файлы с расширением `.stories.tsx`), на основе которых `Loki` снимает скриншоты.

Запустить `storybook` можно командой - `npm run storybook`

Ссылка на документацию - [https://storybook.js.org/](https://storybook.js.org/)

[Подробнее о Storybook](/docs/storybook.md)

----

## Конфигурация проекта

Для разработки проекта используется `Webpack`

Вся конфигурация хранится в папке `config`
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в `.github/workflows`.
1) В ci прогоняется сборка проекта, линтеры, все виды тестов.
2) В прекоммит хуках прогоняются линтеры, конфиг в `.husky`

----

## Работа с данными

Взаимодействие с данными осуществляется с помощью `redux toolkit`.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts) и [axios](/src/shared/api/axiosApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется хук 
[useDynamicModuleLoader](/src/shared/hooks/useDynamicModuleLoader.tsx)

[Подробнее о работе с данными](/docs/store.md)
----

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [User](/src/entities/User)

## Фичи (features)

- [AddNewComment](/src/features/AddNewComment)
- [AuthByUsername](/src/features/AuthByUsername)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [FetchArticleById](/src/features/FetchArticleById)
- [FetchArticles](/src/features/FetchArticles)
- [FetchNotifications](/src/features/FetchNotifications)
- [FetchRecommendedArticles](/src/features/FetchRecommendedArticles)
- [SortingArticles](/src/features/SortingArticles)

## Виджеты (widgets)
