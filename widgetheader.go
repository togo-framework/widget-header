// Package widgetheader is the "Header" DRIVER — Search launcher (cmd-K), theme toggle and locale switch.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-header"
package widgetheader

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "header",
		Title:       "Header",
		DefaultZone: "topbar",
		Asset:       "/widgets/header.js",
	})
}
