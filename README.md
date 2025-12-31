# Portfolio cá nhân - Vuthai

## 1. Giới thiệu dự án

Trang portfolio cá nhân xây dựng bằng Vite + React 19. Giao diện hiện đại có hiệu ứng chuyển động (framer-motion, GLSL/ogl) kèm chế độ đa ngôn ngữ (tiếng Việt / tiếng Anh).
https://vuthai0303.github.io/portfolio/

## 2. Kiến trúc dự án

### Các công nghệ, thư viện, framework sử dụng

- **React 19**
- **Vite** làm bộ khởi tạo và bundler với cấu hình tối giản (cấu hình đặc thù chế độ `type: 'module'`).
- **TypeScript** đảm bảo kiểu tường minh xuyên suốt codebase.
- **Redux Toolkit** và **react-redux** Quản lý state dự án
- **React Router v7** xử lý điều hướng trang (home, project, experience, tools,...).
- **i18next + react-i18next** hỗ trợ đa ngôn ngữ.
- **Tailwind CSS + PostCSS** cung cấp hệ thống thiết kế utility-first và xử lý CSS.
- **Framer Motion + OGL** tạo hiệu ứng animation / visual đặc sắc (text động, background, particle).
- **@heroui/** và **lucide-react** dùng cho bộ UI phụ trợ (theme, icon,…).
- **gh-pages** cho việc deploy lên GitHub Pages thông qua `npm run deploy`.

### Cấu trúc thư mục

- `src/main.tsx` khởi tạo React và đính kèm `AppRouter`.
- `src/routes/router.tsx` chứa cấu hình BrowserRouter với NavBar và các route con.
- `src/components/` chứa các component trong dự án.
- `src/components/ui` gồm các component giao diện chung (NavBar, Typewriter, TimeLine, background...).
- `src/pages` tổ chức các trang chính (HomePage, ExperiencePage, ProjectPage, ToolsPage,...).
- `src/store` quản lý Redux store và slice.
- `src/services/middlewares` chứa các function middlewares/intercepter.
- `src/utils` chứa các function tiện ích chung.
- `src/assets` chứa hình, video, tài nguyên đa phương tiện.
- `src/styles` định nghĩa CSS toàn cục và style riêng như typewriter.
- `public` chứa các tài nguyên tĩnh phục vụ build (logo, svg, ảnh động ...).

## 3. Hướng dẫn khởi chạy dự án

1. Cài Node.js phiên bản **20.6.1** (hoặc tương đương, đảm bảo tương thích `typescript` ~5.7.2).
2. Clone repo và cài dependencies:

```bash
npm install
```

3. Chạy môi trường phát triển:

```bash
npm run dev
```

4. Build sản phẩm để deploy:

```bash
npm run build
```

5. Nếu muốn deploy lên GitHub Pages:

```bash
npm run deploy
```
