export function getLastPart(location = null) {
    const pathSplits = location
        ? location.split('/').filter(t => t !== '')
        : this.props.location.pathname.split('/').filter(t => t !== '');
    let lastPart = '';
    if (pathSplits.length > 1) {
        lastPart = pathSplits[pathSplits.length - 1];
    }
    return lastPart;
}
