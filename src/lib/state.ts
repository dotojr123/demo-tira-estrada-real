/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { create } from 'zustand';
import { Agent, Tira } from './presets/agents';

/**
 * User
 */
export type User = {
  name?: string;
  info?: string;
};

export const useUser = create<
  {
    setName: (name: string) => void;
    setInfo: (info: string) => void;
  } & User
>(set => ({
  name: '',
  info: '',
  setName: name => set({ name }),
  setInfo: info => set({ info }),
}));

/**
 * Agents
 */
function getAgentById(id: string) {
  const { availablePersonal, availablePresets } = useAgent.getState();
  return (
    availablePersonal.find(agent => agent.id === id) ||
    availablePresets.find(agent => agent.id === id)
  );
}

export const useAgent = create<{
  current: Agent;
  availablePresets: Agent[];
  availablePersonal: Agent[];
  setCurrent: (agent: Agent | string) => void;
  addPersonal: (agent: Agent) => void;
  removePersonal: (id: string) => void;
  updatePersonal: (id: string, updates: Partial<Agent>) => void;
}>(set => ({
  current: Tira,
  availablePresets: [Tira],
  availablePersonal: [],
  setCurrent: (agent: Agent | string) =>
    set(state => {
      if (typeof agent === 'string') {
        const found = getAgentById(agent);
        if (found) {
          return { current: found };
        }
        return state;
      }
      return { current: agent };
    }),
  addPersonal: (agent: Agent) =>
    set(state => ({
      availablePersonal: [...state.availablePersonal, agent],
    })),
  removePersonal: (id: string) =>
    set(state => ({
      availablePersonal: state.availablePersonal.filter(
        agent => agent.id !== id
      ),
    })),
  updatePersonal: (id: string, updates: Partial<Agent>) =>
    set(state => ({
      availablePersonal: state.availablePersonal.map(agent =>
        agent.id === id ? { ...agent, ...updates } : agent
      ),
    })),
}));

/**
 * UI
 */
export const useUI = create<{
  showUserConfig: boolean;
  showAgentEdit: boolean;
  setShowUserConfig: (show: boolean) => void;
  setShowAgentEdit: (show: boolean) => void;
}>((set) => ({
  showUserConfig: false,
  showAgentEdit: false,
  setShowUserConfig: (show: boolean) => set({ showUserConfig: show }),
  setShowAgentEdit: (show: boolean) => set({ showAgentEdit: show }),
}));