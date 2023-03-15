module.exports = (componentName) => `

interface ${componentName}Props {
    className?: string;
}

export const ${componentName} = (props: ${componentName}Props) => {
    const { className } = props;
    
    return (
        <div className={className}></div>
    );
};`;
