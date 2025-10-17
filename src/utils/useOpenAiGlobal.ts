/**
 * Source: https://developers.openai.com/apps-sdk/build/custom-ux#understand-the-windowopenai-api
 */
import { useSyncExternalStore } from 'react';
import { OpenAiGlobals, SET_GLOBALS_EVENT_TYPE, SetGlobalsEvent } from '../types/openai.js';

export default function useOpenAiGlobal<K extends keyof OpenAiGlobals>(
    key: K
): OpenAiGlobals[K] {
    return useSyncExternalStore(
        (onChange) => {
            const handleSetGlobal = (event: SetGlobalsEvent) => {
                const value = event.detail.globals[key];
                if (value === undefined) {
                    return;
                }

                onChange();
            };

            window.addEventListener(SET_GLOBALS_EVENT_TYPE, handleSetGlobal, {
                passive: true,
            });

            return () => {
                window.removeEventListener(SET_GLOBALS_EVENT_TYPE, handleSetGlobal);
            };
        },
        () => window.openai[key]
    );
}
