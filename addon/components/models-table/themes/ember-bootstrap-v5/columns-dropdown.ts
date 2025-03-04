import { ensureSafeComponent } from '@embroider/util';
import ModelsTableColumnsDropdownComponent from '../../themes/default/columns-dropdown';
import { getBsDropdown } from '../../../../utils/emt/themes/ebs';

export default class ColumnsDropdown extends ModelsTableColumnsDropdownComponent {
  get BSDropdown(): unknown {
    return ensureSafeComponent(getBsDropdown(), this);
  }
}
