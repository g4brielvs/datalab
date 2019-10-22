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
        "sort": {"field": "depth"},
        "size": [{"signal": "2 * PI"}, {"signal": "width / 2"}],
        "as": ["a0", "r0", "a1", "r1", "depth", "children"]
      },
      {
        "type": "partition",
        "field": "agency",
      }
    ]
  }
],

  "scales": [
  {
    "name": "color",
    "type": "ordinal",
    "domain": {"data": "tree", "field": "agency"},
    "range": {"scheme": ['#881e3d', '#daa200', '#D25d15', '#082344', '#004c40']}
  },
  {
    "name": "xscale",
    "type": "linear",
    "domain": [0, {"signal": "2 * PI"}]
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
        "fill": {"scale": "color", "field": "agency"},
        "tooltip": {"signal": "datum.name + (datum.size ? ', ' + datum.agency + ' agency' : '')"}
      },
      "update": {
        "startAngle": {"signal": "datum.a0"},
        "endAngle": {"signal": "datum.a1"},
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