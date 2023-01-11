# Wedding Invitation React.js Template

결혼식 초대를 위한 청첩장 템플릿입니다.  

## 환경 설정 및 주의사항  
1. VSCode 프로그램 설치 : https://crazykim2.tistory.com/748  
2. GIT 회원가입 : https://goddaehee.tistory.com/218  
3.소스 GIT fork : 깃헙페이지에서 진행  
4.VSCode 실행 후 cmd로 git clone (초기 git설치), .gitignore 파일 설명 : https://kim-oriental.tistory.com/31  
5.node 및 yarn, 모듈 설치 : https://offbyone.tistory.com/441, https://heropy.blog/2017/11/25/yarn/  
6.소스 설명 및 수정 부분 정리  
7. 카카오톡 링크 공유 방법 : https://songsong.dev/14  
8. 서버 실행 : yarn start  
9. Github 무료 호스팅 : https://codingapple.com/unit/react-build-deploy-github-pages/  
10. Github Page Url : https://[user name].github.io/[repo name]/  

## 결과 미리보기

### Wedding Invitation v1
![Preview v1](./Preview_v1.gif)

### Wedding Invitation v2
![Preview v2](./Preview_v2.gif)

## 템플릿에 포함하고 있는 내용 및 기능
- 결혼식 날짜, 위치, 인사말 출력
- 사진첩
- 축의금을 보내실 곳 (계좌번호 클립보드 복사 기능 지원)
- 카카오톡 공유 기능 및 링크 공유 기능

## 청첩장 소스 수정방법⭐

config.ts : 이미지 정보, 계좌 정보 입력, 웨딩날짜, 장소 변경  
Title.tsx :  제목 변경  
Greeting.tsx : 결혼합니다 글 부분  
Gallery.tsx : 사진부분 변경  
Location.tsx : 지도부분  
CongratulatoryMoney.tsx : 축의금 부분  
share.tsx : 공유하기 화면  
index.css :  폰트 변경, https://amaze9001.tistory.com/95  
색상표 참고하여 css 변경가능 : https://webruden.tistory.com/395  
리액트 외부 라이브러리 : Confetti, Title.tsx 파일에 있음  
version1 error 처리 : npm install -g win-node-env, npm install webpack -g  
무료 영상 템플릿 : https://www.pexels.com/ko-kr/

