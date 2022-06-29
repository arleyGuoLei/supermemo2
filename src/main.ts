import dayjs from "dayjs";
import { supermemo, SuperMemoItem, SuperMemoGrade } from "supermemo";

// 5: perfect response.
// 4: correct response after a hesitation.
// 3: correct response recalled with serious difficulty.

// 2: incorrect response; where the correct one seemed easy to recall. 错
// 1: incorrect response; the correct one remembered. 错
// 0: complete blackout. 错

interface Flashcard extends SuperMemoItem {
  front: string;
  back: string;
  dueDate: string;
}

function practice(flashcard: Flashcard, grade: SuperMemoGrade): Flashcard {
  const { interval, repetition, efactor } = supermemo(flashcard, grade);

  const dueDate = dayjs(flashcard.dueDate).add(interval, "day").toISOString();

  return { ...flashcard, interval, repetition, efactor, dueDate };
}

let flashcard: Flashcard = {
  front: "programer",
  back: "an organism that turns caffeine in software",

  // 重复后的重复间隔（以天为单位）。初始间隔值应为 0。
  interval: 0,
  // 连续正确回答的次数。初始重复值应为 0。
  repetition: 0,

  // 容易性因子反映了记忆和保留给定项目的难易程度。初始因子值应为 2.5。
  efactor: 2.5,

  // 当前出现的时间
  dueDate: dayjs(Date.now()).toISOString(),
};

console.log(flashcard);

flashcard = practice(flashcard, 3); 
console.log(flashcard);

flashcard = practice(flashcard, 4);
console.log(flashcard);

flashcard = practice(flashcard, 5);
console.log(flashcard);

flashcard = practice(flashcard, 5);
console.log(flashcard);


flashcard = practice(flashcard, 5);
console.log(flashcard);


flashcard = practice(flashcard, 5);
console.log(flashcard);


flashcard = practice(flashcard, 5);
console.log(flashcard);


flashcard = practice(flashcard, 5);
console.log(flashcard);


flashcard = practice(flashcard, 5);
console.log(flashcard);
