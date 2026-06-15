import time
import random
import heapq
import matplotlib.pyplot as plt


def parse_graph_from_text(text):
    # Reads a graph written in the format:
    # V E
    # u v w
    # ...
    lines = [line.strip() for line in text.strip().splitlines() if line.strip()]
    if not lines:
        return None, None

    V, E = map(int, lines[0].split())
    edges = []

    for i in range(1, E + 1):
        u, v, w = map(int, lines[i].split())
        edges.append((u, v, w))

    return V, edges


def build_adjacency_list(V, edges):
    # Since the graph is undirected, add both directions
    adj = [[] for _ in range(V)]

    for u, v, w in edges:
        adj[u].append((v, w))
        adj[v].append((u, w))

    # Sorting helps keep output deterministic when weights tie
    for neighbors in adj:
        neighbors.sort(key=lambda x: (x[1], x[0]))

    return adj


def normalize_edge(u, v, w):
    # Always store the smaller vertex first for cleaner output
    if u > v:
        u, v = v, u
    return (u, v, w)


def sort_mst_edges(edges):
    # Final MST edges are sorted before printing
    return sorted(edges, key=lambda e: (e[2], e[0], e[1]))


def format_mst_result(mst_edges, total_weight, execution_ms):
    lines = ["MST Edges:"]
    for u, v, w in mst_edges:
        lines.append(f"{u} - {v} ({w})")

    lines.append("")
    lines.append(f"Total Weight: {total_weight}")
    lines.append(f"Execution Time: {execution_ms:.3f} ms")

    return "\n".join(lines)


def prim_heap(V, adj, start=0):
    # Prim's algorithm using a min-heap
    start_time = time.perf_counter_ns()

    visited = [False] * V
    visited[start] = True

    pq = []
    mst_edges = []
    total_weight = 0

    # Put all edges from the starting vertex into the heap
    for nbr, w in adj[start]:
        a, b = sorted((start, nbr))
        heapq.heappush(pq, (w, a, b, start, nbr))

    while pq and len(mst_edges) < V - 1:
        w, a, b, u, v = heapq.heappop(pq)

        # Ignore edges that connect two already-visited vertices
        if visited[u] and visited[v]:
            continue

        # Figure out which endpoint is the new one entering the MST
        if not visited[v]:
            new_vertex = v
            old_vertex = u
        else:
            new_vertex = u
            old_vertex = v

        mst_edges.append(normalize_edge(old_vertex, new_vertex, w))
        total_weight += w
        visited[new_vertex] = True

        # Add edges leaving the new vertex
        for nbr, weight in adj[new_vertex]:
            if not visited[nbr]:
                x, y = sorted((new_vertex, nbr))
                heapq.heappush(pq, (weight, x, y, new_vertex, nbr))

    end_time = time.perf_counter_ns()

    if len(mst_edges) != V - 1:
        raise ValueError("Graph is not connected, so MST could not be formed.")

    mst_edges = sort_mst_edges(mst_edges)
    execution_ms = (end_time - start_time) / 1_000_000
    return mst_edges, total_weight, execution_ms


def prim_unordered(V, adj, start=0):
    # Prim's algorithm without a heap
    # I keep track of the best edge reaching each vertex,
    # then linearly scan to find the next minimum key each time.
    start_time = time.perf_counter_ns()

    INF = float("inf")
    key = [INF] * V
    parent = [None] * V
    in_mst = [False] * V

    key[start] = 0

    for _ in range(V):
        u = -1
        best = (INF, INF, INF)

        # Find the unvisited vertex with the smallest key
        for v in range(V):
            if not in_mst[v]:
                p = parent[v] if parent[v] is not None else INF
                candidate = (key[v], p, v)
                if candidate < best:
                    best = candidate
                    u = v

        if u == -1 or key[u] == INF:
            raise ValueError("Graph is not connected, so MST could not be formed.")

        in_mst[u] = True

        # Relax edges from u
        for nbr, w in adj[u]:
            if not in_mst[nbr]:
                current_parent = parent[nbr] if parent[nbr] is not None else INF
                current = (key[nbr], current_parent)
                proposed = (w, u)

                if proposed < current:
                    key[nbr] = wx
                    parent[nbr] = u

    mst_edges = []
    total_weight = 0

    for v in range(V):
        if v == start:
            continue
        u = parent[v]
        if u is None:
            raise ValueError("Graph is not connected, so MST could not be formed.")
        mst_edges.append(normalize_edge(u, v, key[v]))
        total_weight += key[v]

    end_time = time.perf_counter_ns()

    mst_edges = sort_mst_edges(mst_edges)
    execution_ms = (end_time - start_time) / 1_000_000
    return mst_edges, total_weight, execution_ms


SAMPLE_TEST_CASES = [
    {
        "name": "Test Case 1",
        "input": """5 7
0 1 2
0 3 6
1 2 3
1 3 8
1 4 5
2 4 7
3 4 9
""",
        "expected_weight": 16
    },
    {
        "name": "Test Case 2",
        "input": """6 9
0 1 4
0 2 4
1 2 2
1 3 5
2 3 5
2 4 11
3 4 2
3 5 6
4 5 1
""",
        "expected_weight": 14
    },
    {
        "name": "Test Case 3",
        "input": """7 11
0 1 7
0 3 5
1 2 8
1 3 9
1 4 7
2 4 5
3 4 15
3 5 6
4 5 8
4 6 9
5 6 11
""",
        "expected_weight": 39
    },
    {
        "name": "Test Case 4",
        "input": """4 5
0 1 1
0 2 4
1 2 2
1 3 5
2 3 3
""",
        "expected_weight": 6
    },
    {
        "name": "Test Case 5",
        "input": """5 7
0 1 1
0 2 1
1 2 2
1 3 3
2 3 3
3 4 2
2 4 4
""",
        "expected_weight": 7
    },
    {
        "name": "Test Case 6",
        "input": """6 8
0 1 3
0 2 1
1 2 7
1 3 5
2 3 4
2 4 2
3 5 6
4 5 3
""",
        "expected_weight": 13
    }
]


def run_correctness_tests():
    print("=" * 60)
    print("Correctness Tests")
    print("=" * 60)

    for case in SAMPLE_TEST_CASES:
        print(f"\n{case['name']}")
        V, edges = parse_graph_from_text(case["input"])
        adj = build_adjacency_list(V, edges)

        heap_mst, heap_weight, heap_time = prim_heap(V, adj, start=0)
        unordered_mst, unordered_weight, unordered_time = prim_unordered(V, adj, start=0)

        print("\nHeap-Based Prim:")
        print(format_mst_result(heap_mst, heap_weight, heap_time))

        print("\nUnordered Adjacency-List Prim:")
        print(format_mst_result(unordered_mst, unordered_weight, unordered_time))

        assert heap_weight == case["expected_weight"], (
            f"Heap version failed on {case['name']}"
        )
        assert unordered_weight == case["expected_weight"], (
            f"Unordered version failed on {case['name']}"
        )
        assert len(heap_mst) == V - 1
        assert len(unordered_mst) == V - 1

    print("\nAll correctness tests passed.\n")


def generate_connected_graph(V, E, seed=42, weight_low=1, weight_high=1000):
    # First make a random spanning tree so the graph is definitely connected.
    # Then add extra random edges until we reach E edges.
    if E < V - 1:
        raise ValueError("A connected graph needs at least V-1 edges.")
    if E > V * (V - 1) // 2:
        raise ValueError("Too many edges for a simple undirected graph.")

    rng = random.Random(seed)
    used_edges = set()
    edges = []

    # Build a random spanning tree
    for v in range(1, V):
        u = rng.randint(0, v - 1)
        w = rng.randint(weight_low, weight_high)
        a, b = sorted((u, v))
        used_edges.add((a, b))
        edges.append((a, b, w))

    # Add remaining random edges
    while len(edges) < E:
        u = rng.randint(0, V - 1)
        v = rng.randint(0, V - 1)

        if u == v:
            continue

        a, b = sorted((u, v))
        if (a, b) in used_edges:
            continue

        w = rng.randint(weight_low, weight_high)
        used_edges.add((a, b))
        edges.append((a, b, w))

    return edges


def benchmark_implementations(configs, runs_per_graph=5, base_seed=100):
    results = {
        "heap": [],
        "unordered": []
    }

    print("=" * 60)
    print("Performance Benchmarks")
    print("=" * 60)

    for idx, (V, E) in enumerate(configs):
        seed = base_seed + idx
        edges = generate_connected_graph(V, E, seed=seed)
        adj = build_adjacency_list(V, edges)

        starts = list(range(min(runs_per_graph, V)))

        heap_times = []
        unordered_times = []

        for s in starts:
            _, heap_weight, heap_ms = prim_heap(V, adj, start=s)
            _, unordered_weight, unordered_ms = prim_unordered(V, adj, start=s)

            # Both implementations should produce the same MST weight
            if heap_weight != unordered_weight:
                raise AssertionError(
                    f"Mismatch found for V={V}, E={E}, start={s}: "
                    f"heap={heap_weight}, unordered={unordered_weight}"
                )

            heap_times.append(heap_ms)
            unordered_times.append(unordered_ms)

        avg_heap = sum(heap_times) / len(heap_times)
        avg_unordered = sum(unordered_times) / len(unordered_times)

        results["heap"].append((V, E, avg_heap))
        results["unordered"].append((V, E, avg_unordered))

        print(f"\nGraph with V={V}, E={E}")
        print(f"Heap-Based Prim average time: {avg_heap:.3f} ms")
        print(f"Unordered Prim average time: {avg_unordered:.3f} ms")

    return results


def plot_results(results, output_file="prim_runtime_plot.png"):
    edge_counts = [E for _, E, _ in results["heap"]]
    heap_times = [avg for _, _, avg in results["heap"]]
    unordered_times = [avg for _, _, avg in results["unordered"]]

    plt.figure(figsize=(9, 6))
    plt.plot(edge_counts, heap_times, marker='o', label='Heap-Based Prim')
    plt.plot(edge_counts, unordered_times, marker='s', label='Unordered Adjacency-List Prim')

    plt.xlabel("Graph Size (Number of Edges)")
    plt.ylabel("Average Execution Time (ms)")
    plt.title("Prim's Algorithm Performance Comparison")
    plt.grid(True)
    plt.legend()
    plt.tight_layout()
    plt.savefig(output_file)
    plt.show()

    print(f"\nPlot saved as: {output_file}")


def main():
    run_correctness_tests()

    configs = [
        (100, 1000),
        (500, 5000),
        (1000, 10000),
        (2000, 20000)
    ]

    results = benchmark_implementations(configs, runs_per_graph=5, base_seed=100)
    plot_results(results)


if __name__ == "__main__":
    main()