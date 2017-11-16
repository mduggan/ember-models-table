import Component from '@ember/component';
import layout from '../../templates/components/models-table/row-group-toggle';
import {get} from '@ember/object';

/**
 * Component is used to toggle rows group visibility
 *
 * Don't override this component. Use [groupingRowComponent](Components.ModelsTable.html#property_groupingRowComponent)
 *
 * @namespace Components
 * @class ModelsTableRowGroupToggle
 * @extends Ember.Component
 */
export default Component.extend({
  layout,

  /**
   * Bound from {{#crossLink "Components.ModelsTableRowGrouping/groupIsCollapsed:property"}}groupIsCollapsed{{/crossLink}}
   *
   * @property groupIsCollapsed
   * @type boolean
   * @default null
   */
  groupIsCollapsed: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTableRowGrouping/groupedValue:property"}}groupedValue{{/crossLink}}
   *
   * @type *
   * @property groupedValue
   * @default null
   */
  groupedValue: null,

  /**
   * List of all rows group items
   *
   * If rows group is last on the page, not all it's items may be shown. Use `visibleGroupedItems` to get rows group items shown on the current table's page
   *
   * @type object[]
   * @property groupedItems
   * @default null
   */
  groupedItems: null,

  /**
   * List of rows group items shown on the current table page
   *
   * @type object[]
   * @property visibleGroupedItems
   * @default null
   */
  visibleGroupedItems: null,

  /**
   * List of selected rows group items
   *
   * @type object[]
   * @property selectedGroupedItems
   * @default null
   */
  selectedGroupedItems: null,

  /**
   * List of expanded rows group items
   *
   * @type object[]
   * @property expandedGroupedItems
   * @default null
   */
  expandedGroupedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @property displayGroupedValueAs
   * @type string
   * @default null
   */
  displayGroupedValueAs: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/messages:property"}}ModelsTable.messages{{/crossLink}}
   *
   * @property messages
   * @type object
   * @default null
   */
  messages: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRows:method"}}ModelsTable.actions.toggleGroupedRows{{/crossLink}}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsSelection:method"}}ModelsTable.actions.toggleGroupedRowsSelection{{/crossLink}}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsExpands:method"}}ModelsTable.actions.toggleGroupedRowsExpands{{/crossLink}}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sendAction:method"}}ModelsTable.actions.sendAction{{/crossLink}}
   *
   * @event sendAction
   */
  sendAction: null,

  actions: {
    toggleGroupedRows() {
      get(this, 'toggleGroupedRows')(get(this, 'groupedValue'));
    },
    toggleGroupedRowsSelection() {
      get(this, 'toggleGroupedRowsSelection')(get(this, 'groupedValue'));
    },
    toggleGroupedRowsExpands() {
      get(this, 'toggleGroupedRowsExpands')(get(this, 'groupedValue'));
    }
  }
});
