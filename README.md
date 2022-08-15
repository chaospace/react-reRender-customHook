# 커스텀 훅 사용 시 re-render 주의사항

- 모든 속성 변경은 host 컴포넌트의 re-render를 발생하고 이는 custom훅도 예외는 아니다.
- 커스텀 훅에서 관리하는 상태가 있다면 이 역시 host컴포넌트에 re-render를 요청한다.

Created with CodeSandbox
