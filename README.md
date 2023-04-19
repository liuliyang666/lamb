# 我的 Vue3 + TSX项目

## 编码规范

### ref 默认值

推荐使用

```tsx
const div = ref<HTMLDivElement>();
```

不推荐使用

```tsx
const div = ref<HTMLDivElement | null>(null);
```

## 如何开发

pnpm run dev

## 如何打包

pnpm run build  打包

pnpm run preview  预览打包后的文件
