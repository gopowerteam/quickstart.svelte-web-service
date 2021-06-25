const variable = {
    '--cds-interactive-01': '#1890ff',
    '--cds-hover-primary': '#1890ffEA',
    '--cds-active-primary': '#1890ffAA'
}

export function useTheme() {
    Object.entries(variable).map(([key, value]) => {
        document.documentElement.style.setProperty(key, value)
    })
}
