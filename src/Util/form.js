import { get } from 'lodash';

export function handleInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value,
    });
}

export function submitOnEnterCancelOnEsc(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        if (this.updateValue) {
            this.updateValue();
        }
    }
    if (event.key === 'Escape' || event.keyCode === 27) {
        if (this.toggleEditing) {
            this.toggleEditing();
        }
    }
}

export function toggleEditing() {
    setTimeout(() => {
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }, 200);

    this.setState(prevState => ({
        editing: !prevState.editing,
        [this.props.name]: this.props.value,
    }));
}

export function updating(prop, key) {
    return !!prop.updating.filter(item => item === key).length;
}

export function updatingValue(prop, key) {
    return get(prop.updatingValue, key, {});
}

export function updatingFieldValue(prop, key, field) {
    return get(prop.updatingValue, key + '[' + field + ']', undefined);
}
