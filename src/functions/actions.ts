import { CallToolResponse, DisplayMode } from '../types/openai.js';

export async function callTool(tool: string, args: Record<string, unknown> = {}): Promise<CallToolResponse> {
    return await window.openai.callTool(tool, args);
};

export async function sendFollowUpMessage(prompt: string): Promise<void> {
    await window.openai.sendFollowUpMessage({ prompt });
};

export function openExternal(href: string): void {
    window.openai.openExternal({ href });
};

export async function requestDisplayMode(displayMode: DisplayMode): Promise<{ mode: DisplayMode }> {
    return await window.openai.requestDisplayMode({ mode: displayMode });
};
