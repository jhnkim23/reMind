#recursive-algo
import json 

nodes = []
edges = []
quotes = {}

with open('abc.json', 'r') as file:
    data = json.load(file)

# make sure algo adds things things to the array in the React flow format
def add_node_and_edges(node, parent=None):
    # Add the node to the nodes array
    nodes.append({"id" : node["title"], "data" : {"label": node["title"]}, "position": {}})
    
    if "quotes" in node:
        quotes[node["title"]] = (node["summary"], node["quotes"])
    
    # If there is a parent, add an edge
    if parent:
        #edges.append((parent, node["title"]))
        edges.append({"id" : parent + "-" + node["title"], "source" : parent, "target": node["title"], "type": "smoothstep"})

    # Recursively add sub-nodes
    if "sub-topics" in node and node["sub-topics"]:
        for sub_node in node["sub-topics"]:
            add_node_and_edges(sub_node, node["title"])

# Start the recursion with the main topic
add_node_and_edges(data)

# Output the nodes and edges
print("Nodes:", nodes)
print("------------------------------------------")
print("Edges:", edges)
print("------------------------------------------")
print("Quotes:", quotes)