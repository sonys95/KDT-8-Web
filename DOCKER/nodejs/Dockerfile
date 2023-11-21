
#기본 이미지 설정
FROM node:16

#작업 디렉토리 설정
WORKDIR /app

#소스(파일) 추가
COPY . /app

#패키지 설치 명령어 실행 (쉘 스크립트)
RUN npm install

#포트 매핑(포트를 명시)
EXPOSE 8000

#실행 명령문 = 컨테이너를 생성, 실행할 때 사용하는 명령문
#node index.js
CMD ["node", "index.js"]
