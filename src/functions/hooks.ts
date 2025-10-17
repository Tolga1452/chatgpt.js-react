import useOpenAiGlobal from '../utils/useOpenAiGlobal.js';

export function useTheme() {
    return useOpenAiGlobal('theme');
};

export function useUserAgent() {
    return useOpenAiGlobal('userAgent');
};

export function useLocale() {
    return useOpenAiGlobal('locale');
};

export function useMaxHeight() {
    return useOpenAiGlobal('maxHeight');
};

export function useDisplayMode() {
    return useOpenAiGlobal('displayMode');
};

export function useSafeArea() {
    return useOpenAiGlobal('safeArea');
};

export function useToolInput() {
    return useOpenAiGlobal('toolInput');
};

export function useToolOutput() {
    return useOpenAiGlobal('toolOutput');
};

export function useToolResponseMetadata() {
    return useOpenAiGlobal('toolResponseMetadata');
};
