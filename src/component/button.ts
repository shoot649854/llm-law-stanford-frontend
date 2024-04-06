import { goto } from '$app/navigation';

export function handleTellMeMoreClick(path: string) {
  goto(path);
}