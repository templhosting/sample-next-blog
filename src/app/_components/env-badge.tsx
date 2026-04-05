export function EnvBadge() {
    const env = process.env.NODE_ENV;

    if (env === 'production') {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-4 z-50 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg bg-yellow-400 text-yellow-900">
            {env}
        </div>
    );
}
