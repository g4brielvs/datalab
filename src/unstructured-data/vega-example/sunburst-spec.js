export default {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 600,
  "height": 600,
  "padding": 5,
  "autosize": "none",

  "data": [
  {
    "name": "tree",
    "transform": [
      {
        "type": "stratify",
        "key": "id",
        "parentKey": "parent"
      },
      {
        "type": "partition",
        "field": "size",
        "sort": {"field": "value"},
        "size": [{"signal": "2 * PI"}, {"signal": "width / 2"}],
        "as": ["a0", "r0", "a1", "r1", "depth", "children"]
      }
    ]
  }
],

  "scales": [
  {
    "name": "color",
    "type": "ordinal",
    "domain": {"data": "tree", "field": "children"},
    "range": {"scheme": ['#881e3d', '#daa200', '#D25d15', '#082344', '#004c40']}
  }
],

  "marks": [
  {
    "type": "arc",
    "from": {"data": "tree"},
    "encode": {
      "enter": {
        "x": {"signal": "width / 2"},
        "y": {"signal": "height / 2"},
        "fill": {"scale": "color", "field": "children"},
        "tooltip": {"signal": "datum.name + (datum.size ? ', ' + datum.size + ' bytes' : '')"}
      },
      "update": {
        "startAngle": {"field": "a0"},
        "endAngle": {"field": "a1"},
        "innerRadius": {"field": "r0"},
        "outerRadius": {"field": "r1"},
        "stroke": {"value": "white"},
        "strokeWidth": {"value": 0.5},
        "zindex": {"value": 0}
      },
      "hover": {
        "stroke": {"value": "red"},
        "strokeWidth": {"value": 2},
        "zindex": {"value": 1}
      }
    }
  }
]
}