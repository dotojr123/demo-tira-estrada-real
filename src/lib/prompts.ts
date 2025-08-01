/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Agent, User } from './state';

export function createSystemInstructions(
  current: Agent,
  user: User
): string {
  let instructions = current.personality;

  if (user.name && user.name.trim() !== '') {
    instructions += `\n\nYou are talking to ${user.name}.`;
  }

  if (user.info && user.info.trim() !== '') {
    instructions += `\n\nHere's some context about the user: ${user.info}`;
  }

  return instructions;
}