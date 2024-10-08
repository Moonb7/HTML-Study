// ## 문제 1

// **오늘, 두산 베어스와 기아 타이거스가 야구 경기를 하고 있습니다.
// 이제, 두산 베어스의 공격 차례입니다. 현재 주자는 아무도 없지만,
// 두산 베어스는 계속해서 1루타(안타)를 치기 시작합니다. 안타를 칠 때마다 주자들은 1루씩 진루합니다.
// 두산 베어스가 기아 타이거스보다 더 높은 점수를 얻으려면 최소 몇 개의 안타를 쳐야 할까요?

// 참고로, 두산 베어스와 기아 타이거스의 점수는 프로그램 실행 시 임의적으로 사용자가 줄 수 있으며
// 두산 베어스에게 1루타의 신이 강림이 되어 타석을 설 때마다 무조건 1루타를 치는 것이 확정이라고 가정해주세요.**

// **야구의 득점 조건:**
// - 타자는 홈에서 타석을 시작합니다.
// - 타자는 홈 → 1루 → 2루 → 3루 → 홈으로 들어오는 순간 1점을 획득합니다.

// 예시
// [입력]
// const doosanScore = 6;
// const kiaScore = 4;

// [출력]
// 0 // 이기고 있는데 굳이 1루타를 더 치지 않아도 되겠죠?

// [입력]
// const doosanScore = 7;
// const kiaScore = 7;

// [출력]
// 4 // 동점에서 이기기 위해선 최소 1루타 4번이 필요!

// function solution(doosanScore, kiaScore) {
//     let result = 0;
//     const oneScoreLoop = 4;

//     if(doosanScore < kiaScore) {
//         result = oneScoreLoop + kiaScore;
//     } else if(doosanScore === kiaScore) {
//         result = oneScoreLoop;
//     }

//     console.log(result);
//     return result;
// }

// const doosanScore = 0;
// const kiaScore = 8;
// solution(doosanScore, kiaScore);

// ## 문제 2

// **이진 배열 `nums`와 정수 `k`가 주어졌을 때, 최대 `k`개의 0을 1로 뒤집을 수 있다면 배열에서 연속된 1의 최대 개수를 반환하세요.**

// **예시**

// [입력]
// const nums = [1,1,1,0,0,0,1,1,1,1,0]
// const k = 2

// [출력]
// 6
// - [1,1,1,0,0,0,1,1,1,1,0] → [1,1,1,0,0,**1**,1,1,1,1,**1**]
// - 빨갛고 굵게 표시된 숫자는 0에서 1로 뒤집었습니다.
// - 따라서, 배열에서 연속된 1의 최대 개수는 6입니다!

// [입력]
// const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
// const k = 3

// [출력]
// 10
// - [0,0,1,1,1,**1,1**,1,1,**1**,1,1,0,0,0,1,1,1,1]
// - 빨갛고 굵게 표시된 숫자는 0에서 1로 뒤집었습니다.
// - 따라서, 배열에서 연속된 1의 최대 개수는 10입니다!

// 슬라이딩 윈도우 기법활용
// function solution (nums, k) {
//     let result = 0;
//     let left = 0;
//     let zeroCount = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] === 0) {
//             zeroCount++;
//         }
//         while(zeroCount > k){ // 0이 변할 수 있는 k갯수 보다 커지면 안되기에 count를 조절해야됩니다.
//             if(nums[left] === 0){ // 다시 배열 앞에서부터 검사해서 0이면 겹치므로 카운트에서 빼줍니다.
//                 zeroCount--;
//             }
//             left++;
//         }
//         result = Math.max(result, i - left + 1);
//     }
//     console.log(result);
//     return result;
// }

// const nums =  [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
// const k = 3
// solution(nums, k);

// ## 문제 3

// **스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.**

// 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

// **노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.**

// **제약 조건:**

// - genres[i]는 고유번호가 i인 노래의 장르입니다.
// - plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
// - genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
// - 장르 종류는 100개 미만입니다.
// - 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
// - 모든 장르는 재생된 횟수가 다릅니다.

// **예시:**

// | genres | plays | return |
// | --- | --- | --- |
// | ["classic", "pop", "classic", "classic", "pop"] |
// | [500, 600, 150, 800, 2500] |
//  출력
// | [4, 1, 3, 0] |
// - classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.
//     - 고유 번호 3: 800회 재생
//     - 고유 번호 0: 500회 재생
//     - 고유 번호 2: 150회 재생
// - pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.
//     - 고유 번호 4: 2,500회 재생
//     - 고유 번호 1: 600회 재생
// - 따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.
// - 장르 별로 가장 많이 재생된 노래를 최대 두 개까지 모아 베스트 앨범을 출시하므로 2번 노래는 수록되지 않습니다.

function solution(genres, plays) {
  const genreMap = {};
  const result = [];

  // 데이터 정리
  for (let i = 0; i < genres.length; i += 1) {
    // genre[i]의 재생 횟수는 play[i]인 것이 보장
    const genre = genres[i];
    const play = plays[i];

    // { 장르 - total, 노래들 정보 }
    // 노래 정보: [고유 번호, 재생 횟수]

    if (!genreMap[genre]) {
      genreMap[genre] = { total: 0, songs: [] };
    }
    genreMap[genre].total += play;
    genreMap[genre].songs.push([i, play]);
  }

  // 데이터가 준비가 완료되었음!
  const sortedGenres = Object.keys(genreMap).sort((a, b) => genreMap[b].total - genreMap[a].total);

  for (const genre of sortedGenres) {
    const songs = genreMap[genre].songs;

    songs.sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      }
      return a[0] - b[0];
    });

    result.push(songs[0][0]);
    if (songs.length > 1) {
      result.push(songs[1][0]);
    }
  }

  return result;
}

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));
